import { useState } from "react";
import usePrevious from "../utils/usePrevious";

const Grocery = () => {
  const [count, setCount] = useState(0);

  let prevValue = usePrevious(count);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="text-center">
      <h1>
        Current value: {count} Previous Value: {prevValue}
      </h1>
      <button onClick={handleClick} className="bg-red-300 p-3 m-5">
        Update Count
      </button>
    </div>
  );
};

export default Grocery;
