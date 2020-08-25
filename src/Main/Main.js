import React, { Component } from "react";
import data from "../data.json";
import List from "../components/List/List.jsx";
import './Main.css';
class Main extends Component {
  state = {};
  render() {
    // console.log(data);
    // console.log(Object.values(data));
    return (
      <div className="dibba">
        {Object.values(data).map((item) => (
          <List key={item.id} data={item} />
        ))}
      </div>
    );
  }
}

export default Main;
