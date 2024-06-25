import { useState, useEffect } from 'react';
import axios from 'axios';




const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: { ...query },
        headers: {
          'x-rapidapi-key': '1f42ad06cfmsh60b9e1d06333c67p1a74f5jsnad63e1d1e2c4',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
        
      
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.request(options);
            setData(response.data.data);
            isLoading(false);
        } catch (error) {
            setError(error);
            alert('there is an error luka')
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch };
}

export default useFetch;