"use client";

import { ReactSearchAutocomplete } from "react-search-autocomplete";  // install this library from npm for search functionality

export function SearchBar({ InitalCourses, updateCourses }) {
  const handleOnSearch = (string, results) => {                       // this filters the courses which are shown on the ui based on the search string
    updateCourses(results);
    if (string === "") {
      updateCourses(InitalCourses);                                   // if searchbar is empty then it should update courses to all courses not based on the current results array
    }
  };

  const formatResult = (item) => {
    return <span className="block text-left">{item.name}</span>;
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
