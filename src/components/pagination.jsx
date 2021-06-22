import React from "react";
export default function Pagination({ nextPage, PrevPage }) {
  return (
    <div>
      <button
        className="bg-gray-100  border rounded-md m-5 w-32 shadow-md cursor-pointer focus:outline-none hover:bg-gray-300"
        onClick={PrevPage}
      >
        prev. page
      </button>
      <button
        className="bg-gray-100 border rounded-md m-5 w-32 shadow-md cursor-pointer focus:outline-none hover:bg-gray-300 "
        onClick={nextPage}
      >
        next page
      </button>
    </div>
  );
}
