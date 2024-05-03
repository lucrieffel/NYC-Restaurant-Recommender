// pages/view_favorites.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

    const fetchFavorites = async () => {
        const { data, error } = await supabase
            .from('user_favorite_restaurants')
            .select('*')
            .eq('userID', userID);

        if (error) {
            console.error('Error fetching data:', error);
            return;
        }

        setRestaurants(data);
    };

    return (
        <div className={styles.container}>
            <Header />
            <div>
                <input
                    type="text"
                    value={userID}
                    onChange={(e) => setUserID(e.target.value)}
                    placeholder="Enter User ID to view favorites"
                />
                <button onClick={fetchFavorites}>Fetch Favorites</button>
            </div>
            {restaurants.length > 0 ? (
                <ul className={styles.list}>
                    {restaurants.map((restaurant) => (
                        <li key={restaurant.id} className={styles.card}>
                            <h3>{restaurant.restaurantName}</h3>
                            <p>Cuisine: {restaurant.restaurantCuisine}</p>
                            <p>Visits: {restaurant.numTimesVisited}</p>
                            <p>Rating: {restaurant.userRating}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No favorite restaurants found.</p>
            )}
        </div>
    );
}

export default ViewFavorites;