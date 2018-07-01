import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "./axios";

import NavBar from "./components/NavBar";


class App extends Component {
  // Điểm mạnh lớn nhất của React là các component có thể xử lý logic tốt hơn so với html
  // state, props
  // state: biến thuộc về từng component 
  componentDidMount() { // khi web dựng tự động gửi request
    axios
      .get("/api/images")
      .then(data => console.log(data))
      .catch(err =>console.error(err));
  }


  render() {
    return (
      <div className="App">
        <NavBar  />
      </div>
    );
  }
}

export default App;
