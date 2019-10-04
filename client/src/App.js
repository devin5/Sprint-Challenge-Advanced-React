import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Container from "./Container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get(`http://localhost:5000/api/players`)
      .then(res => {
        console.log("did mount getData response", res);
        this.setState({ data: res.data });
      })
      .then(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Container data={this.state.data} />
      </div>
    );
  }
}

export default App;
