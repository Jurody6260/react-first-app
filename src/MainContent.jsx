import React, { Component } from "react";
export default class MainContent extends Component {
  state = { pageTitle: "Gyro", gyroCount: 5 };
  render() {
    return (
      <div className="container">
        {/* <iframe
          width="1280"
          height="720"
          src="https://www.youtube.com/embed/HJVLBdhoafI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          className="border-bottom p-3"
        /> */}
        <h1 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">{this.state.gyroCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refersh
          </button>
        </h1>
      </div>
    );
  }
  onRefreshClick = () => {
    var a = this.state["gyroCount"] + 1;
    this.setState({ gyroCount: a });
  };
}
