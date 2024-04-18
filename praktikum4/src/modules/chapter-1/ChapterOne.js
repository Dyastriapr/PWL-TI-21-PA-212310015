import React, { Component } from "react";
import MessegersUI from "../chapter-2/widget/messagers/MessegersUI";

export default class ChapterOne extends Component {
  render() {
    return (
      <div className="container-fluid mx-auto">
        <h1 className="text-center ">Chapter One: The Beginning</h1>
        <MessegersUI />
      </div>
    );
  }
}
