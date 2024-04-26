import React from "react";
import { Course } from "../types/Course";

type Props = {
  course: Course;
};

export const CourseCard: React.FC<Props> = React.memo(({ course }) => {
  return (
    <div className="course-card">
      <div
        className="image-container"
        style={{ backgroundColor: course.bgColor }}
      >
        <img className="image" src={course.image} alt={course.name} />
      </div>
      <div className="course-name-container">
        <span className="course-name">{course.name}</span>
      </div>
    </div>
  );
});
