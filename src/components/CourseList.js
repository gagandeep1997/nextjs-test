import { useCourses } from "./useCourses";
import { SearchBox } from "./SearchBox";
import { Courses } from "./Courses";

export function CourseList() {
  const courses = useCourses();

  return (
    <>
      <h3 className="ml-5">List of Available Courses</h3>
      <SearchBox Courses={courses} />
      <Courses Courses={courses} />
    </>
  );
}
