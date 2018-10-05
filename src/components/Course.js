import React, { Component } from "react";
import axios from "axios";
import CourseView from "./CourseView";

class Course extends Component {
  state = {
    course: null,
    error: false
  }

  render() {
    const course = this.state.course ? (
      <CourseView {...this.state.course} />
    ) : this.state.error ? (
      <div>An error occurred</div>
    ) : (
      <div>Loading...</div>
    );
    return (
      <div className="container course">
        { course }
      </div>
    );
  }

  componentDidMount() {
    axios.get("https://sheehan.nz/live/exam-forecaster/dist/courses/" + this.props.match.params.course_code.toLowerCase() + ".json")
      .then((res) => {
        if (res.status === 200) {
          this.setState({
            error:false,
            course: res.data
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

export default Course;