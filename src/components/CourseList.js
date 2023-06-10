"use client";

import { useCourses } from "./useCourses";
import { SearchBox } from "./SearchBox";
import { Courses } from "./Courses";

export function CourseList() {
  const { InitalCourses, courses, setCourses } = useCourses();

  return (
    <>
      <SearchBox
        InitalCourses={InitalCourses}
        Courses={courses}
        updateCourses={setCourses}
      />
      <h3 className="font-mono ml-5 text-xl mt-10">
        List of Available Courses
      </h3>
      <Courses Courses={courses} />
    </>
  );
}
