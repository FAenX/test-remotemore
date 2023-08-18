import { useState, useEffect } from 'react';

function useApiCall(url: string) {
  const [data, setData] = useState<string>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string | unknown>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useApiCall;
