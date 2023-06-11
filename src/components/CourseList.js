"use client";

import { useCourses } from "./useCourses";
import { SearchBox } from "./SearchBox";
import { Courses } from "./Courses";
import { CourseListHeader } from "./CourseListHeader";

export function CourseList() {
  const { InitalCourses, courses, setCourses } = useCourses();

  return (
    <>
      <SearchBox InitalCourses={InitalCourses} updateCourses={setCourses} />
      <CourseListHeader Courses={courses} updateCourses={setCourses} />
      <Courses Courses={courses} />
    </>
  );
}
