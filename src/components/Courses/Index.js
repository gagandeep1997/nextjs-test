"use client";

import { useCourses } from "../../hooks/useCourses";
import { Search } from "./Search";
import { List } from "./List";
import { Header } from "./Header";
import { CustomSearch } from "./CustomSearch";

export function Index() {
  const { InitalCourses, courses, setCourses } = useCourses();

  return (
    <>
      <Search InitalCourses={InitalCourses} updateCourses={setCourses} />
      <CustomSearch InitalCourses={InitalCourses} updateCourses={setCourses} />
      <Header
        Courses={courses}
        updateCourses={setCourses}
        courseHeaderTitle="Available Courses"
        sortTitle="Sort By"
      />
      <List Courses={courses} />
    </>
  );
}
