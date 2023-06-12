"use client"; // we use this to indicate that we are using client components not server compoenents

import { useCourses } from "../hooks/useCourses"; // custom hook that initalizes local data in state and returns us the state which we uses to render current data on the ui
import { SearchBar } from "./SearchBar";
import { Courses } from "./Courses"; // shows list of all courses that we see on the ui
import { CourseListHeader } from "./CourseListHeader";

export function CourseList() {
  const { InitalCourses, courses, setCourses } = useCourses(); // fetches state and initalcourses which we use use in searchbar and passes as a props everywhere

  return (
    <>
      <SearchBar InitalCourses={InitalCourses} updateCourses={setCourses} />
      <CourseListHeader Courses={courses} updateCourses={setCourses} />
      <Courses Courses={courses} />
    </>
  );
}
