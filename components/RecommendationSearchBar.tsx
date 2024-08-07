// src/components/RecommendationSearchBar.tsx
import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/SearchBar.module.css';

interface RecommendationSearchBarProps {
    onSearch: (userId: string, cuisine?: string) => void;
}

const RecommendationSearchBar: React.FC<RecommendationSearchBarProps> = ({ onSearch }) => {
    const [userId, setUserId] = useState<string>('');
    const [cuisine, setCuisine] = useState<string>('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(userId, cuisine);
    };

    return (
        <form onSubmit={handleSubmit} className={styles.searchBar}>
            <input
                type="text"
                placeholder="Enter User ID"
                value={userId}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value)}
                className={styles.searchInput}
            />
            <input
                type="text"
                placeholder="Enter Cuisine (optional)"
                value={cuisine}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setCuisine(e.target.value)}
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>Get Recommendations</button>
        </form>
    );
};

export default RecommendationSearchBar;
