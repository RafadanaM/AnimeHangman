import { useCallback, useEffect, useRef, useState } from "react";
import { differenceToTomorrow } from "../utils/date.utils";

const useCounterToTomorrow = () => {
  const [count, setCount] = useState(() => {
    return differenceToTomorrow();
  });

  let increment = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    increment.current = setInterval(() => {
      setCount((prevState) => prevState - 1);
    }, 1000);

    return () => {
      if (increment.current) clearInterval(increment.current);
    };
  }, []);

  useEffect(() => {
    if (count <= 0) {
      if (increment.current) clearInterval(increment.current);
    }
  }, [count]);

  const handleStopCount = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (increment.current) clearInterval(increment.current);
    },
    []
  );

  return { count, handleStopCount };
};
export default useCounterToTomorrow;
