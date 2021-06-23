import React, { Component } from "react";
import gitlogo from "../images/gitlogo.svg"

class Home extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center">
        <img src={gitlogo} alt="github" className="flex m-auto w-3/5 // md:w-2/5" />
        <h1 className="text-center text-xl  m-14">Welcome</h1>
      </div>
    );
  }
}

export default Home;
