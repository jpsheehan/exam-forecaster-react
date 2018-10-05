import React from "react";
import { letterGrade, letterColour, gpaValue } from "../gradeUtils";

// get an array with the numbers 100 - 40 with a stepping of 5
const examGrades = [...Array(13).keys()].map(n => 100 - n * 5);

const ExamForecast = (props) => {

  // calculate the internal weight
  const internalWeight = props.course.categories.reduce((prev, category) => {
    return prev + category.entries.reduce((prev, entry) => {
      return prev + entry.electedMark / entry.marks * entry.weight;
    }, 0);
  }, 0);

  let minimumGrade = 100;
  let maximumGrade = 0;

  const grades = examGrades.map((grade) => {
    const total = grade / 100 * props.course.exam_weight + internalWeight;
    const letter = letterGrade(total, props.course.exam_pass);

    if (total > maximumGrade) {
      maximumGrade = total;
    }

    if (total < minimumGrade) {
      minimumGrade = total;
    }

    return (
      <tr key={grade} className={letterColour(letter)}>
        <td>{grade}%</td>
        <td>{parseFloat(total).toFixed(2)}</td>
        <td>{letter}</td>
        <td>{gpaValue(letter)}</td>
      </tr>
    );
  });

  return (
    <div className="exam-forecast">
      <h4>Exam Forecast</h4>
      <p>To pass this course you must get at least {props.course.exam_pass}% in the final exam and at least {props.course.course_pass}% overall.
Based on the information you've entered, you will get between a {letterGrade(maximumGrade, props.course.exam_pass)} and a {letterGrade(minimumGrade, props.course.exam_pass)} for the entire course. </p>
      <table>
        <thead>
          <tr>
            <th>Exam Mark</th>
            <th>Course Mark</th>
            <th>Letter Grade</th>
            <th>GPA Value</th>
          </tr>
        </thead>
        <tbody>
          {grades}
        </tbody>
      </table>
    </div>
  );
};

export default ExamForecast;