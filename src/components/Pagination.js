import React from "react";
import { useDispatch } from "react-redux";

const Pagination = ({ totalPages, currentPage, setPage }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center space-x-2 mt-6">
    
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={`px-4 py-2 rounded-full shadow-md ${
            currentPage === i + 1 ? "bg-black text-white font-bold" : "bg-gray-300 hover:bg-gray-400"
          }`}
          onClick={() => dispatch(setPage(i + 1))}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
