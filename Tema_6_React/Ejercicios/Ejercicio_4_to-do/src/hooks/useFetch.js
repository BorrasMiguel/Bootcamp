import{ useEffect } from 'react';

export default function useFetch(url, setToDos) {
    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setToDos(data))
      }, []);
}