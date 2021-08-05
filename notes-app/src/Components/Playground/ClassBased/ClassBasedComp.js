import React, { Component } from "react";

class ClassBased extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      counter: 0,
      users: [],
    };
  }
  clickHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  componentDidCatch(error) {}
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://reqres.in/api/userrs")
      .then((resp) => resp.json)
      .then((result) => {
        console.log("RESULT : ", result);
        this.setState({
          users: result.data,
        })
      }).catch(err => console.log(err));;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <div>
        <p>Counter : {this.state.counter} </p>
        <button className="btn btn-primary" onClick={this.clickHandler}>
          Increase
        </button>
      </div>
    );
  }
}

export default ClassBased;

// const FuncCmp = (props) => {
// const [state, setState] = useState()
//     return ()
// }
