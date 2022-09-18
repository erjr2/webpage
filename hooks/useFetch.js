import { useEffect, useState } from "react";

const useFetch = (url, options) => {
  const [error, setError] = useState("");
  const [data, setData] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    fetch(url, { ...options, signal: controller.signal })
      .then((res) => {
        if (res.ok) {
          return res;
        }
        setError(res.message);
      })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        setError(error.message);
      });

    return () => {
      controller.abort();
    };
  }, [url, options]);
  return [data, error];
};

export default useFetch;
