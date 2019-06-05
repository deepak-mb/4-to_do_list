import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

export class Provider extends Component {
  state = {};

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then(res => {
      console.log(res.data);
    });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
