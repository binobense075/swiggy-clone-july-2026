import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(2);

  useEffect(() => {
    let timer = setInterval(() => {
      console.log("User Function Interval");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Function Component Unmounted");
    };
  }, []);
  return (
    <div className="user-card">
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Chennai</h3>
      <h4>Contact: 9873464120</h4>
    </div>
  );
};

export default User;
