import { useCallback, useState } from "react";

type Metods = "GET" | "POST" | "PUT";

interface Response<T> {
  data: T | null;
  error: null | string;
}

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async <T>(
      url: string,
      method: Metods = "GET",
      body?: T
    ): Promise<Response<T>> => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, {
          method,
          body: body ? JSON.stringify(body) : undefined,
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        return { data, error: null };
      } catch (error: any) {
        return { data: null, error: error.message };
      } finally {
        setLoading(false);
      }
    },
    []
  );

  const cleatError = useCallback(() => setError(null), []);

  return {
    loading,
    error,
    request,
    cleatError,
  };
};
