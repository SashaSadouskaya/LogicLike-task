import { Course } from "../types/Course";

export const getCourses = async (): Promise<Course[]> => {
  const response = await fetch("https://logiclike.com/docs/courses.json");
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  return response.json();
};
