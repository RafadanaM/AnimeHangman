import React from "react";
import useCounterToTomorrow from "../../../hooks/useCounterToTomorrow";
import { secondToHms } from "../../../utils/date.utils";


const Counter = () => {
  const { count } = useCounterToTomorrow();
  return (
    <span className="text-3xl block mt-2 font-bold">{secondToHms(count)}</span>
  );
};

export default Counter;
