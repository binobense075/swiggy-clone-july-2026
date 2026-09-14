import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };

    console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    const data = await fetch("https://api.github.com/users/binobense");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("setInterval is running");
    }, 1000);
  }

  componentDidUpdate() {
    console.log(this.props.name + "Child Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log(this.props.name + "Child Component Will Unmount");
  }

  render() {
    const { name, location } = this.props;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <h2>Name: {this.state.userInfo.login}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 9873464120</h4>
      </div>
    );
  }
}

export default UserClass;
