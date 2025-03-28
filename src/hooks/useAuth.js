import { useState, useEffect } from 'react';
import axios from 'axios';



const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const response = await axios.get('https://dermacare-backend.up.railway.app/accounts/me/', {
            headers: { Authorization: `Token ${token}` },
          });
          setUser(response.data);
        }
      } catch (err) {
        setError({ message: err.message || 'An error occurred' });
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);
  console.log(user)
  return { user, loading, error };
};

export default useAuth;
