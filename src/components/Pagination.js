import React from "react";
import { useDispatch } from "react-redux";

const Pagination = ({ totalPages, setPage }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex space-x-2 mt-6">
      {Array.from({ length: totalPages }, (_, i) => (
        <button key={i} className="px-4 py-2 bg-gray-300 rounded-lg shadow-md" onClick={() => dispatch(setPage(i + 1))}>{i + 1}</button>
      ))}
    </div>
  );
};

export default Pagination;
