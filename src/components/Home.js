import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Home.css";

class Home extends Component {
  state = {
    courses: null,
    error: null
  }

  render() {
    const courses = this.state.courses ? this.state.courses.map(course => {
      const url = "/" + course.code;
      return (
      <div className="course-summary card" key={course.code}>
        <h5><Link to={url}>{course.code}</Link></h5>
        <p>{course.title}</p>
      </div>
    )}) : this.state.error ? (
      <div>An error occurred</div>
    ) : (
      <div>Loading courses...</div>
    );

    return (
      <div className="center home">
        <div className="container">
          {courses}
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://sheehan.nz/live/exam-forecaster/dist/courses/courses.json")
      .then((res) => {
        if (res.status === 200) {
          const courses = [];
          for (let course in res.data) {
            courses.push(res.data[course])
          }

          this.setState({
            error: false,
            courses
          });
        } else {
          this.setState({
            ...this.state,
            error: true
          });
        }
      });
  }
};

export default Home;