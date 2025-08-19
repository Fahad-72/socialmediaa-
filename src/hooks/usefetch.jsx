import { useEffect, useState } from "react";

export default function useFetch(fn, deps = []) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fn().then(setData);
  }, deps);
  return data;
}
