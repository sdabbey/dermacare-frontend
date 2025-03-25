import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FindADoctor from '../../components/findadoctor/FindADoctor';

export default function FindADoctorPage(){
    const navigate = useNavigate(); // Initialize navigate

    // Check if user is authenticated
    useEffect(() => {
        // Check localStorage or context for authentication state
        const token = localStorage.getItem('token'); // Adjust based on your auth implementation
        if (!token) {
        navigate('/signin'); // Redirect to dashboard if token exists
        }
    }, [navigate]);

    return(
        <FindADoctor />
    )
}