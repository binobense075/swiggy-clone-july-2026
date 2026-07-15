const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", key: "11" }, [
    React.createElement("h1", { key: "1" }, "Nested children1"),
    React.createElement("h2", { key: "2" }, "Double Nested children1"),
  ]),
  React.createElement("div", { id: "child2", key: "22" }, [
    React.createElement("h3", { key: "3" }, "Nested children2"),
    React.createElement("h4", { key: "4" }, "Double Nested children2"),
  ]),
]);
console.log("heading", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
