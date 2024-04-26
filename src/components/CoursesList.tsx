import React, { useState, useEffect } from "react";
import { Course } from "../types/Course";
import { getCourses } from "../requests/getCourses";

import { CourseCard } from "./CourseCard";
import { SideMenu } from "./SideMenu";

export const CoursesList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    getCourses()
      .then((courses) => {
        setCourses(courses);
        const uniqueTags = Array.from(
          new Set(courses.flatMap((course) => course.tags))
        );
        setTags(uniqueTags);
      })
      .catch(console.error);
  }, []);

  console.log(selectedTag);

  const filteredCourses =
    selectedTag === ""
      ? courses
      : courses.filter((course) => course.tags.includes(selectedTag));

  return (
    <div className="app-container">
      <SideMenu
        tags={tags}
        selectTag={setSelectedTag}
        selectedTag={selectedTag}
      />
      <div className="courses-container">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
