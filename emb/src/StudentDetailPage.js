
import React, { Component } from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class StudentDetailPage extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      data: [],
    };
    console.log(this.props)
  }
  componentDidMount() {
    console.log(this.props)
    const message = JSON.parse(this.props.location.data);
    let data = [];
    Object.keys(message).map((key)=>{
        data.push({name: key, Marks:message[key]});
    })
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <BarChart width={600} height={300} data={this.state.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey="name"/>
            <YAxis/>
            <Tooltip/>
            <Legend />
            <Bar dataKey="Marks" fill="#8884d8" />
        </BarChart>
      </div>
    );
  }
}

export default StudentDetailPage;
