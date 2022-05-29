import { RequestUsers } from 'interfaces';
import { useState, useEffect } from 'react';

interface Options {
  method: string;
}

export function useFetch(url: string, options: Options) {
  const [value, setValue] = useState<null | RequestUsers>(null);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(url, options);
        const users: RequestUsers = await data.json();

        setValue(users);

      } catch (err) {
        setError('Error occurred');
      } finally {
        setIsLoading(false);
      }
    })()
  }, [url, options])

  return { value, error, isLoading };
}