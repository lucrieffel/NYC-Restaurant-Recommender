//pages/favorite_restaurants.tsx
import React, { useState } from 'react';
import supabase from '../components/config/supabaseClient';
import Header from '../components/Header';
import favoritesStyles from '../styles/Favorites.module.css';

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
            // Clear form after successful submission
            setUserID('');
            setRestaurantName('');
            setCuisine('');
            setNumberOfTimesVisited(0);
            setRating(0.0); 
        }
    };

    return (
        <div className={favoritesStyles.container}>
            <Header />
            <form onSubmit={submitForm} className={favoritesStyles.form}>
                <div className={favoritesStyles.formGroup}>
                    <label htmlFor="userID" className={favoritesStyles.label}>User ID (Email):</label>
                    <input
                        type="email"
                        id="userID"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        required
                        className={favoritesStyles.input}
                    />
                </div>
                <div className={favoritesStyles.formGroup}>
                    <label htmlFor="restaurantName" className={favoritesStyles.label}>Restaurant Name:</label>
                    <input
                        type="text"
                        id="restaurantName"
                        value={restaurantName}
                        onChange={(e) => setRestaurantName(e.target.value)}
                        required
                        className={favoritesStyles.input}
                    />
                </div>
                <div className={favoritesStyles.formGroup}>
                    <label htmlFor="restaurantCuisine" className={favoritesStyles.label}>Cuisine:</label>
                    <input
                        type="text"
                        id="restaurantCuisine"
                        value={restaurantCuisine}
                        onChange={(e) => setCuisine(e.target.value)}
                        required
                        className={favoritesStyles.input}
                    />
                </div>
                <div className={favoritesStyles.formGroup}>
                    <label htmlFor="numTimesVisited" className={favoritesStyles.label}>Number of Times Visited:</label>
                    <input
                        type="number"
                        id="numTimesVisited"
                        value={numTimesVisited}
                        onChange={(e) => setNumberOfTimesVisited(parseInt(e.target.value))}
                        required
                        className={favoritesStyles.input}
                    />
                </div>
                <div className={favoritesStyles.formGroup}>
                    <label htmlFor="userRating" className={favoritesStyles.label}>User Rating:</label>
                    <input
                        type="number"
                        step="0.1"
                        id="userRating"
                        value={userRating}
                        onChange={(e) => setRating(parseFloat(e.target.value))}
                        required
                        className={favoritesStyles.input}
                    />
                </div>
                <button type="submit" className={favoritesStyles.button}>Submit</button>
                {feedback && <p className={favoritesStyles.feedback}>{feedback}</p>}
            </form>
        </div>
    );
}

export default FavoriteRestaurants;