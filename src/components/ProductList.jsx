import React from "react";
import { useDispatch } from "react-redux";

const ProductList = ({ posts, viewMode, removePost, startIndex }) => {
  const dispatch = useDispatch();

  return (
    <div className={viewMode === "grid" ? "grid grid-cols-3 gap-6" : "flex flex-col space-y-4"}>
      {posts.map((news, index) => (
        <div 
          key={news.id} 
          className="relative flex items-center bg-white shadow-lg rounded-lg p-4 max-w-5xl mx-auto"
        >
          <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
            <img 
              src={news.image || "https://via.placeholder.com/50"} 
              alt="news" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="ml-4 flex-1">
            <h3 className="font-bold text-gray-800 text-md">
              {news.title}
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              {news.body}
            </p>
            <p className="text-gray-400 text-xs mt-2">
              Mon, 21 Dec 2020 14:57 GMT
            </p>
          </div>

          <button
            className="absolute top-3 right-3 w-8 h-8 bg-red-100 text-red-500 rounded-full flex items-center justify-center hover:bg-red-200"
            onClick={() => dispatch(removePost(startIndex + index))}
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
