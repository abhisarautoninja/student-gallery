import React, { Component } from "react";
import StudentGallery from "./StudentGallery";
import "./style.css";
import _ from 'lodash';
import axios from "axios";
import { Button, Navbar, FormGroup, FormControl } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
class StudentLandingPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      data: [],
      superSetData: [],
      directions:{
        name: "asc",
        marks: "desc"
      },
      latestClicked: "name"
    };
  }
  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/1dlper", {
        params: {
          ID: 12345
        }
      })
      .then(response => {
        Object.keys(response.data).map((key) => {
          response.data[key].totalMarks = this.getTotalMarks(response.data[key]);
        })
        const data = response.data,
        superSetData = response.data;
        this.setState({ data, superSetData });
      })
      .catch(error => {
        console.log(error);
      });
  }
  getTotalMarks = item => item.marks ? Object.keys(item.marks).reduce((final, k) => (final += item.marks[k]), 0) : null;
  filter = evt => {
    const data = Object.values(this.state.superSetData)
    .filter(
    item =>
        item.name.toLowerCase().includes(evt.target.value.toLowerCase())
    )
    .reduce(function(obj, item) {
    obj[item.rollNo] = item;
    return obj;
    }, {});
    if (evt.target.value === "") {
      this.setState({ data: _.orderBy(this.state.superSetData, [this.state.latestClicked], [this.state.directions[this.state.latestClicked]]) });
    }
    this.setState({
      data: _.orderBy(data, [this.state.latestClicked], [this.state.directions[this.state.latestClicked]]),
    });
  };
  sort = param => {
    let directions = this.state.directions;
    directions[param] = this.state.directions[param] === "asc" ? "desc" : "asc";
    this.setState({
      data: _.orderBy(this.state.superSetData, [param], [directions[param]]),
      directions,
      latestClicked: param
    });
  };
  render() {
    return (
        <div>
            <div class="topnav">
                <a onClick={() => {this.sort("totalMarks")}}>Sort By Marks</a>
                <a onClick={() => {this.sort("name")}}>Sort By Name</a>
                <input className="pull-right" type="text" placeholder="Search" onChange={this.filter}/>
            </div>
            <div className="student-gallery">
                <StudentGallery data={this.state.data} getTotalMarks={this.getTotalMarks}></StudentGallery>
            </div>
      </div>
    );
  }
}

export default StudentLandingPage;