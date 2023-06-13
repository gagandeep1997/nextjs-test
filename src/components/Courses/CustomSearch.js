import React from "react";

export function CustomSearch() {
  const [inputValue, setInputValue] = React.useState("");

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const deleteInputValueHandler = () => {
    setInputValue("");
  };

  return (
    <div className="mt-10 ml-5 relative h-16">
      <div className="absolute flex flex-col w-full border-2 border-solid border-slate-200 rounded-3xl bg-white text-base font-arial text-black z-0">
        <div className="min-h-44p w-full flex items-center">
          <svg
            className="shrink-0 my-0 mr-0 ml-4 fill-gray-500 block"
            width="20"
            height="20"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
          <input
            className="w-full py-0 pr-0 pl-3 border-none outline-none bg-black/0 placeholder:text-gray-500 text-inherit font-inherit"
            type="text"
            spellCheck="false"
            placeholder="Search for courses"
            data-test="search-input"
            value={inputValue}
            onChange={inputChangeHandler}
          />
          {inputValue !== "" && (
            <div
              className="mr-4 ml-0 mt-1 cursor-pointer"
              onClick={deleteInputValueHandler}
            >
              <svg
                width="20"
                height="20"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </div>
          )}
        </div>
        <div>
          <div className="border-t-slate-300 border-t-solid border-t-1 my-0 ml-3 mr-4 pb-2"></div>
          <ul className="list-none m-0 px-0 pt-0 pb-4">
            <li className="flex items-center py-2 px-0" data-test="result">
              <svg
                className="shrink-0 my-0 ml-4 mr-0 fill-gray-500 block"
                width="20"
                height="20"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
              <div
                className="text-left w-full ml-4 whitespace-nowrap overflow-hidden text-ellipsis"
                title="CSS Animations"
              >
                <span className="block text-left">
                  <p>gagan deep</p>
                </span>
              </div>
            </li>
            <li className="flex items-center py-2 px-0" data-test="result">
              <svg
                className="shrink-0 my-0 ml-4 mr-0 fill-gray-500 block"
                width="20"
                height="20"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
              </svg>
              <div
                className="text-left w-full whitespace-nowrap overflow-hidden text-ellipsis"
                title="CSS Animations"
              >
                <span className="block text-left">
                  <p>gagan deep</p>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
