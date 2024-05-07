// src/components/Results.tsx

import React from 'react';
import styles from '../styles/Results.module.css'; 
import cardStyles from '../styles/Card.module.css';

export interface Result {
  id: string;
  name: string;
  image_url?: string;
  location: {
    address1: string;
  };
  display_phone: string;
  rating: number;
  review_count: number;
  url: string;
  categories: { title: string }[];
}

interface ResultsProps {
  results: Result[];
}

const Results: React.FC<ResultsProps> = ({ results }) => {
  return (
    <div className={styles.resultsContainer}>
      {results.map((result) => (
        <div key={result.id} className={cardStyles.card}>
          <h2 className={cardStyles.cardTitle}>{result.name}</h2>
          {result.image_url && (
            <img
              src={result.image_url}
              alt={result.name}
              className={cardStyles.cardImage}
            />
          )}
          <p className={cardStyles.cardText}>Address: {result.location.address1}</p>
          <p className={cardStyles.cardText}>Phone: {result.display_phone}</p>
          <p className={cardStyles.cardText}>
            Categories: {result.categories.map(category => category.title).join(', ')}
          </p>
          <p className={cardStyles.cardText}>
            Rating: {result.rating} Stars ({result.review_count} Reviews)
          </p>
          <a
            href={result.url}
            className={cardStyles.cardLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on Yelp
          </a>
        </div>
      ))}
    </div>
  );
};

export default Results;
