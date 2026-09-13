import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Error Page</h1>
      <h1>
        {err.status} :{err.statusText}
      </h1>
    </div>
  );
};

export default ErrorComponent;
