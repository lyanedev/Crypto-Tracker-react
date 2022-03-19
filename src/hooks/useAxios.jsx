import { useState, useEffect } from "react";

import axios from "axios";

const useAxios = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios.get(url);

        if (!data || data.length === "") {
          throw new Error(data.statusText);
        }

        setIsLoading(false);
        setData(data);
        setIsError(null);
      } catch (err) {
        setIsLoading(false);
        setIsError(`Oops, il y a eu un problème 😭 : ${err}`);
        console.error(isError);
      }
    };

    getData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useAxios;
