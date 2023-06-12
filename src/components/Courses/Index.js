"use client";

import { useCourses } from "../../hooks/useCourses";
import { SearchBar } from "./Search";
import { Courses } from "./List";
import { CourseListHeader } from "./Header";

export function CourseList() {
  const { InitalCourses, courses, setCourses } = useCourses();

  return (
    <>
      <SearchBar InitalCourses={InitalCourses} updateCourses={setCourses} />
      <CourseListHeader
        Courses={courses}
        updateCourses={setCourses}
        courseHeaderTitle="Available Courses"
        sortTitle="Sort By"
      />
      <Courses Courses={courses} />
    </>
  );
}
