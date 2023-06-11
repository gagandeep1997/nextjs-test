export function CourseListHeader({ Courses, updateCourses }) {
  const sortCourseByDate = () => {
    const sortedData = [...Courses].sort(function (a, b) {
      if (a.publishDate < b.publishDate) {
        return -1;
      }
      if (a.publishDate > b.publishDate) {
        return 1;
      }
      return 0;
    });
    updateCourses(sortedData);
  };
  const sortCourseByDuration = () => {
    const sortedData = [...Courses].sort(function (a, b) {
      if (a.duration < b.duration) {
        return -1;
      }
      if (a.duration > b.duration) {
        return 1;
      }
      return 0;
    });
    updateCourses(sortedData);
  };
  return (
    <div className="flex flex-row justify-between my-10">
      <h3 className="font-mono ml-5 text-xl pt-2">
        List of Available Courses
      </h3>
      <div>
        <span className="mr-5">Sort Courses By </span>
        <div className="inline-flex">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={sortCourseByDate}
          >
            Date
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            onClick={sortCourseByDuration}
          >
            Duration
          </button>
        </div>
      </div>
    </div>
  );
}
