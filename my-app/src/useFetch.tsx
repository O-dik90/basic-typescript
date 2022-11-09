import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(err => console.log(err));
  },[url]);

  return [data]
};

export default useFetch;
