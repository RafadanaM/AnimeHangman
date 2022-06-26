import { useEffect, useState } from "react";

const useFetchData = <T>(cb: () => Promise<T>) => {
  const [data, setData] = useState<T | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown | null>(null);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async (fn: Function) => {
      try {
        const responseData = await fn();
        if (isMounted) {
          setData(responseData);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setError(error);
          setData(null);
        }
      } finally {
        isMounted && setLoading(false);
      }
    };

    fetchData(cb);

    return () => {
      isMounted = false;
    };
  }, [cb]);

  return {
    data,
    loading,
    error,
  };
};
export default useFetchData;
