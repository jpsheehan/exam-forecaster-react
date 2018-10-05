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
      <CourseView handleChange={this.handleChange} {...this.state.course} />
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
    const storedData = localStorage.getItem(this.props.match.params.course_code);

    if (storedData) {
      this.setState({
        error:false,
        course: JSON.parse(storedData)
      });
    } else {
      axios.get("https://sheehan.nz/live/exam-forecaster/dist/courses/" + this.props.match.params.course_code.toLowerCase() + ".json")
        .then((res) => {
          if (res.status === 200) {
            res.data.categories.forEach((category) => {
              category.entries.forEach((entry) => {
                entry.electedMark = 0;
              });
            });
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
  }

  handleChange = (e, categoryIndex, entryIndex) => {
    const courseCopy = {...this.state.course};
    courseCopy.categories[categoryIndex].entries[entryIndex].electedMark = e.target.value;
    this.setState({
      error: false,
      course: courseCopy
    });
    localStorage.setItem(this.state.course.code, JSON.stringify(this.state.course));
  }

};

export default Course;