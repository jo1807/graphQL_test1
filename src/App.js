import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import "./App.css";
import Launches from "./components/launches";

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
});

class App extends Component {
  render() {
    const wrapper = {
      display: "flex",
      flexDirection: "column",
      textAlign: "center"
    };
    return (
      <ApolloProvider client={client}>
        <div className="App" style={wrapper}>
          <h1>SpaceX</h1>
          <Launches />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
