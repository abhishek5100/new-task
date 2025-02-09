import React from "react";
import { useDispatch } from "react-redux";

const ProductList = ({ posts, viewMode, removePost, startIndex }) => {
  const dispatch = useDispatch();
  return (
    <div className={viewMode === "grid" ? "grid grid-cols-3 gap-6" : "flex flex-col space-y-6"}>
      {posts.map((news, index) => (
        <div key={news.id} className="border p-6 bg-white shadow-md rounded-lg flex flex-col">
          <h3 className="font-bold text-lg">{news.title}</h3>
          <p className="text-gray-600">{news.body}</p>
          <button className="mt-4 w-[100px] px-4 py-2 bg-red-500 text-white rounded-lg" onClick={() => dispatch(removePost(startIndex + index))}>✖</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;