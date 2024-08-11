import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecommendationSearchBar from '../components/RecommendationSearchBar';
import RecommendationResults from '../components/RecommendationResults';
import Header from '../components/Header';
import homeStyles from '../styles/Home.module.css';
import * as tf from '@tensorflow/tfjs';
import { GraphModel } from '@tensorflow/tfjs';

const RecommendationsPage: React.FC = () => {
    const [model, setModel] = useState<GraphModel | null>(null);
    const [recommendations, setRecommendations] = useState<RecommendationResult[]>([]);

    useEffect(() => {
        const loadModel = async () => {
            try {
                // const loadedModel = await tf.loadGraphModel('https://raw.githubusercontent.com/lucrieffel/NYC_Restaurant_Recommendation_Algorithm/main/model.json'); 
                const loadedModel = await tf.loadGraphModel('https://raw.githubusercontent.com/lucrieffel/NYC_Restaurant_Recommendation_Algorithm/main/model.json'); 
                setModel(loadedModel);
                console.log('Model loaded successfully');
            } catch (error) {
                console.error('Model loading failed:', error);
            }
        };
        loadModel();
    }, []);

    const handleSearch = async (userId: string, cuisine?: string) => {
        // Assuming you have a function to fetch or compute recommendations
        const fetchedRecommendations = await fetchRecommendations(userId, cuisine);
        setRecommendations(fetchedRecommendations);
    };

    // Dummy function for fetching recommendations, to be replaced with actual API call or logic
    const fetchRecommendations = async (userId: string, cuisine?: string): Promise<RecommendationResult[]> => {
        // Replace the following dummy data with actual data fetching logic
        return [
            { id: '1', name: 'Restaurant One', rating: 4.5 },
            { id: '2', name: 'Restaurant Two', rating: 4.0 },
        ];
    };

    return (
        <div className={homeStyles.container}>
            <Header />
            <RecommendationSearchBar onSearch={handleSearch} />
            <RecommendationResults recommendations={recommendations} />
        </div>
    );
};

export default RecommendationsPage;

// Define the type for RecommendationResult used in state and props
interface RecommendationResult {
    id: string;
    name: string;
    rating: number;
}