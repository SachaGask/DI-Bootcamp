import { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleClick = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  render() {
    if (this.state.count > 5) {
      throw new Error("Error ! 5 is the maximum");
    }
    return (
      <button onClick={this.handleClick}>
        Count: {this.state.count}
      </button>
    );
  }
}

export default BuggyCounter;
