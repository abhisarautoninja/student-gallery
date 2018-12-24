
import React, { Component } from "react";
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const data = [
    {name: 'Page A', uv: 4000},
    {name: 'Page B', uv: 3000},
    {name: 'Page C', uv: 2000},
    {name: 'Page D', uv: 2780},
    {name: 'Page E', uv: 1890},
    {name: 'Page F', uv: 2390},
    {name: 'Page G', uv: 3490},
];
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
    let message = JSON.parse(this.props.location.pathname.split("/")[this.props.location.pathname.split("/").length-1]);
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
