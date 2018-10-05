import React from "react";
import "./CourseView.css";
import ExamForecast from "./ExamForecast";

const CourseView = (props) => {
  const categories = props.categories.map((category, categoryIndex) => {
    const entries = category.entries.map((entry, entryIndex) => {
      return (
        <tr key={entryIndex}>
          <td>{entry.name}</td>
          <td>
            <input type="number" min="0" max={entry.marks} value={entry.electedMark} onChange={(e)=>{props.handleChange(e, categoryIndex, entryIndex)}} />
          </td>
          <td className="center">{entry.marks}</td>
          <td className="center">{parseFloat(entry.electedMark / entry.marks * 100).toFixed(2) + "%"}</td>
          <td className="center">{entry.weight}</td>
        </tr>
      );
    });
    return (
      <table className="category striped" key={categoryIndex}>
        <thead>
          <tr>
            <th className="category-name">{category.name}</th>
            <th>Marks</th>
            <th>Max. Marks</th>
            <th>Marks</th>
            <th>Course Weight</th>
          </tr>
        </thead>
        <tbody>
          {entries}
        </tbody>
      </table>
    );
  });
  return (
    <div className="center course-view">
      <h3>{props.title}</h3>
      <h4><i>{props.code}</i></h4>
      {categories}
      <ExamForecast course={props} />
    </div>
  );
};

export default CourseView;