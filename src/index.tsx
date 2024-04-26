import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.scss";
import { CoursesList } from "./components/CoursesList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CoursesList />
  </React.StrictMode>
);
