import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Navbar/Navbar";
import PlaceList from "./PlaceList/PlcaeList";
class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <PlaceList />
      </main>
    );
  }
}

export default App;
