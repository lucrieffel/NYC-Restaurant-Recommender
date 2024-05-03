//pages/favorite_restaurants.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import supabase from '../components/config/supabaseClient';
import Header from '../components/Header';
import restaurantStyles from '../styles/Restaurants.module.css';

const FavoriteRestaurants: React.FC = () => {
    const [userID, setUserID] = useState<string>('');
    const [restaurantName, setRestaurantName] = useState<string>('');
    const [restaurantCuisine, setCuisine] = useState<string>('');
    const [numTimesVisited, setNumberOfTimesVisited] = useState<number>(0);
    const [userRating, setRating] = useState<number>(0.0);
    const [feedback, setFeedback] = useState<string>('');

    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const { data, error } = await supabase.from('user_favorite_restaurants').insert([
            {
                userID: userID,
                restaurantName: restaurantName,
                restaurantCuisine: restaurantCuisine,
                numTimesVisited: numTimesVisited,
                userRating: userRating
            }
        ]);
        if (error) {
            console.error('Error inserting data: ', error.message);
            setFeedback(`Failed to add favorite restaurant: ${error.message}`);
        } else {
            console.log('Data inserted successfully: ', data);
            setFeedback('Favorite restaurant added successfully!');
            //clear form after successful submission
            setUserID('');
            setRestaurantName('');
            setCuisine('');
            setNumberOfTimesVisited(0);
            setRating(0.0); 
        }
    };

    return (
        <div className={restaurantStyles.container}>
            <Header />
            <form onSubmit={submitForm} className={restaurantStyles.form}>
                <label>
                    User ID:
                    <input
                        type="text"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Restaurant Name:
                    <input
                        type="text"
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Cuisine:
                    <input
                        type="text"
                        value={restaurantCuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Number of Times Visited:
                    <input
                        type="number"
                        value={numTimesVisited}
                        onChange={(e) => setNumberOfTimesVisited(parseInt(e.target.value))}
                        required
                    />
                </label>
                <label>
                    User Rating:
                    <input
                        type="number"
                        step="0.1" 
                        value={userRating}
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
                {feedback && <p>{feedback}</p>}
            </form>
        </div>
    );
}

export default FavoriteRestaurants;