import { getSortedData } from "@/utils/helper";
import { Button } from "./elements/Button";

export function CourseListHeader({ Courses, updateCourses }) {
  return (
    <div className="flex flex-row justify-between my-10">
      <h3 className="font-mono ml-5 text-xl pt-2">List of Available Courses</h3>
      <div>
        <span className="mr-5">Sort Courses By </span>
        <div className="inline-flex">
          <Button
            onClick={() => {
              const sortedData = getSortedData(Courses, "publishDate");
              updateCourses(sortedData);
            }}
            sortCategory="Date"
            borderClass="rounded-l"
          />
          <Button
            onClick={() => {
              const sortedData = getSortedData(Courses, "duration");
              updateCourses(sortedData);
            }}
            sortCategory="Duration"
            borderClass="rounded-r"
          />
        </div>
      </div>
    </div>
  );
}
