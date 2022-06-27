import { useEffect, useState } from 'react';

export const useData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
    }
  }, [url]);

    return data;
};