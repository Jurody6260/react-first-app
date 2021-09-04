import React, { Component } from "react";
export default class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      pageTitle: "Gyro",
      gyroCount: 5,
      gyros: [
        {
          id: 1,
          name: "Scott",
          phone: null,
          address: { city: "New Delhi" },
          photo: "https://picsum.photos/id/1024/60",
        },
        {
          id: 2,
          name: "Pierce",
          phone: "123-111-125",
          address: { city: "SanTos" },
          photo: "https://picsum.photos/id/1011/60",
        },
        {
          id: 3,
          name: "Java",
          phone: "123-226-125",
          address: { city: "New Jersi" },
          photo: "https://picsum.photos/id/1012/60",
        },
        {
          id: 4,
          name: "Python",
          phone: "",
          address: { city: "New York" },
          photo: "https://picsum.photos/id/1013/60",
        },
      ],
    };
  }

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
        <h1 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">{this.state.gyroCount}</span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refersh
          </button>
        </h1>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>GyroName</th>
              <th>GyroPhone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>{this.getGyroRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    var a = this.state["gyroCount"] + 1;
    this.setState({ gyroCount: a });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getGyroRow = () => {
    return this.state.gyros.map((gyr, index) => {
      return (
        <tr key={gyr.id}>
          <td>{gyr.id}</td>
          <td>
            <img src={gyr.photo} alt="gyro" />
            <div>
              <button
                className="mt-2 btn btn-sm btn-secondary"
                onClick={() => this.onChangePhoneClick(gyr, index)}
              >
                change picture
              </button>
            </div>
          </td>
          <td>{gyr.name}</td>
          <td>{this.getPhoneToRender(gyr.phone)}</td>
          <td>{gyr.address.city}</td>
        </tr>
      );
    });
  };
  onChangePhoneClick = (gyr, index) => {
    var gyrArr = this.state.gyros;
    gyrArr[index].photo = 'https://picsum.photos/id/1029/60'
    this.setState({gyros: gyrArr});
  };
}
