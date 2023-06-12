import { getSortedData } from "@/utils/helper";
import { Button } from "../../elements/Button";

export function CourseListHeader({
  Courses,
  updateCourses,
  courseHeaderTitle,
  sortTitle,
}) {
  return (
    <div className="flex flex-row justify-between my-10">
      <h3 className="text-4xl font-extrabold ml-5 pt-2">{courseHeaderTitle}</h3>
      <div>
        <span className="mr-5">{sortTitle}</span>
        <div className="inline-flex">
          <Button
            onClick={() => {
              const sortedData = getSortedData(Courses, "publishDate");
              updateCourses(sortedData);
            }}
            customClassName="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            content="Date"
          />
          <Button
            onClick={() => {
              const sortedData = getSortedData(Courses, "duration");
              updateCourses(sortedData);
            }}
            customClassName="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            content="Duration"
          />
        </div>
      </div>
    </div>
  );
}
