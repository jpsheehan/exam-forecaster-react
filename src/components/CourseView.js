import React from "react";

const CourseView = (props) => {
  return (
    <div className="center">
      <h3>{props.title}</h3>
      <h4><i>{props.code}</i></h4>
      
    </div>
  );
};

export default CourseView;