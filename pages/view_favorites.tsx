// pages/view_favorites.tsx
import React, { useState } from 'react';
import supabase from '../components/config/supabaseClient';
import Header from '../components/Header';
import styles from '../styles/Favorites.module.css';

interface Restaurant {
    id: number;
    userID: string;
    restaurantName: string;
    restaurantCuisine: string;
    numTimesVisited: number;
    userRating: number;
}

const ViewFavorites: React.FC = () => {
    const [userID, setUserID] = useState<string>('');
    const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
    const [feedback, setFeedback] = useState<string>('');

    const fetchFavorites = async () => {
        const { data, error } = await supabase
            .from('user_favorite_restaurants')
            .select('*')
            .eq('userID', userID); 

        if (error) {
            console.error('Error fetching data:', error);
            setFeedback('Error fetching data');
            return;
        }

        if (data.length === 0) {
            setFeedback('No favorite restaurants found');
        } else {
            setFeedback('');
        }

        setRestaurants(data);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="userID" className={styles.label}>User ID (Email):</label>
                    <input
                        type="email"
                        id="userID"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
                        placeholder="Enter User ID to view favorites"
                        className={styles.input}
                        required
                    />
                </div>
                <button onClick={fetchFavorites} className={styles.button}>Fetch Favorites</button>
                {feedback && <p className={styles.feedback}>{feedback}</p>}
            </div>
            {restaurants.length > 0 && (
                <ul className={styles.list}>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id} className={styles.card}>
                            <h3 className={styles.cardTitle}>{restaurant.restaurantName}</h3>
                            <p className={styles.cardText}>Cuisine: {restaurant.restaurantCuisine}</p>
                            <p className={styles.cardText}>Visits: {restaurant.numTimesVisited}</p>
                            <p className={styles.cardText}>Rating: {restaurant.userRating}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ViewFavorites;