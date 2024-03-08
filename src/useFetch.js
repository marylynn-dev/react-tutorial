import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const abort = new AbortController()

        setTimeout(() => {
            fetch(url, { signal: abort.signal })
                .then((res) => {
                    if (!res.ok) { throw Error('Could not fetch Data!') }
                    return res.json();
                })
                .then((data) => {
                    console.log(data);
                    setData(data);
                    setIsLoading(false);
                    setError(false)
                })
                .catch((err) => {
                    if (err.name === 'AbbortError') {
                        console.log('fetch aborted')
                    } else {
                        setError(err.message)
                    }
                })
                .finally(() => setIsLoading(false))
        }, 1000);

        return () => abort.abort()
    }, [url]);

    return { data, isLoading, error }
}

export default useFetch