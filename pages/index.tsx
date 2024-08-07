// index.tsx
import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Results, { Result } from '../components/Results';
import homeStyles from '../styles/Home.module.css';
import Header from '../components/Header';
import cardStyles from '../styles/Card.module.css';
import * as tf from '@tensorflow/tfjs';

const Home: React.FC = () => {
    const [results, setResults] = useState<Result[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [queryTerm, setQueryTerm] = useState<string>('');

    const searchYelp = (term: string) => {
        setLoading(true);
        setError('');
        setQueryTerm(term); //set query term in the state to display in title
    
        const url = '/api/search'; // Proxy path to avoid CORS issues
    
        axios.get(url, { params: { term, location: 'New York, NY' } })
            .then(response => {
                setResults(response.data.businesses as Result[]);
                setLoading(false);
            })
            .catch((error: any) => {
                console.error('Error fetching data: ', error.response ? error.response.data : 'Unknown error');
                setError('Failed to fetch data. Please try again.');
                setLoading(false);
            });
    };

    return (
        <div className={homeStyles.container}>
            <Header />
            {/* <Header title={`Top 50 ${queryTerm} Restaurants`} /> */}
            <SearchBar onSearch={searchYelp} />
            {results.length > 0 && <h1>{`Top 50 ${queryTerm} Restaurants`}</h1>}
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <Results results={results} />
        </div>
    );
};

export default Home;

