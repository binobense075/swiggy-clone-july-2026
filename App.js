import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 id="title">Namaste Dev</h1>;

const HeadingComponent = () => (
  <div>
    {Title()}
    <Title />
    <h1>Heading Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
