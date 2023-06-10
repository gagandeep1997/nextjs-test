"use client";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

export function SearchBox({ InitalCourses, Courses, updateCourses }) {
  const handleOnSearch = (string, results) => {
    updateCourses(results);
    if(string===''){
      updateCourses(InitalCourses);
    }
  };
  const formatResult = (item) => {
    return (
      <>
        <span className="block text-left">{item.name}</span>
      </>
    );
  };
  return (
    <div className="my-5 ml-5">
      <ReactSearchAutocomplete
        items={InitalCourses}
        onSearch={handleOnSearch}
        autoFocus
        formatResult={formatResult}
      />
    </div>
  );
}
