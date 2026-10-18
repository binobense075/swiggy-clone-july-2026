import React from "react";
import UserClass from "./UserClass";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div className="text-center">
        <h1>About class component</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold text-red-500">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <User name={"First"} location={"Chennai"} />
      </div>
    );
  }
}

export default About;
