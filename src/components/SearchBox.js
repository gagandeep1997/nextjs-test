"use client";

import { ReactSearchAutocomplete } from "react-search-autocomplete";

export function SearchBox({ Courses }) {
  const formatResult = (item) => {
    return (
      <>
        <span className="block text-left">{item.name}</span>
      </>
    );
  };
  return (
    <div className="mt-3 ml-5">
      <ReactSearchAutocomplete
        items={Courses}
        autoFocus
        formatResult={formatResult}
      />
    </div>
  );
}
