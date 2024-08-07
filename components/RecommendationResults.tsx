// src/components/RecommendationResults.tsx
import React from 'react';
import styles from '../styles/Results.module.css';
import cardStyles from '../styles/Card.module.css';


export interface RecommendationResult {
    id: string;
    name: string;
    rating: number; // Assuming the model returns a numeric rating
    cuisine?: string; // Optional, depending on whether cuisine is returned
    address?: string; // Optional address info
    image_url?: string; // Optional image URL
}

interface RecommendationResultsProps {
    recommendations: RecommendationResult[];
}

const RecommendationResults: React.FC<RecommendationResultsProps> = ({ recommendations }) => {
    return (
        <div className={styles.resultsContainer}>
            {recommendations.map((result) => (
                <div key={result.id} className={cardStyles.card}>
                    <h2 className={cardStyles.cardTitle}>{result.name}</h2>
                    {result.image_url && (
                        <img
                            src={result.image_url}
                            alt={result.name}
                            className={cardStyles.cardImage}
                        />
                    )}
                    {result.address && <p className={cardStyles.cardText}>Address: {result.address}</p>}
                    {result.cuisine && <p className={cardStyles.cardText}>Cuisine: {result.cuisine}</p>}
                    <p className={cardStyles.cardText}>Rating: {result.rating.toFixed(1)} Stars</p>
                </div>
            ))}
        </div>
    );
};

export default RecommendationResults;