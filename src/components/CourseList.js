"use client";

import { useCourses } from "./useCourses";
import { SearchBar } from "./SearchBar";
import { Courses } from "./Courses";
import { CourseListHeader } from "./CourseListHeader";

export function CourseList() {
  const { InitalCourses, courses, setCourses } = useCourses();

  return (
    <>
      <SearchBar InitalCourses={InitalCourses} updateCourses={setCourses} />
      <CourseListHeader Courses={courses} updateCourses={setCourses} />
      <Courses Courses={courses} />
    </>
  );
}
