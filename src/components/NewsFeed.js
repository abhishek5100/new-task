import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removePost, setPage, toggleView } from "./store";
import Pagination from "./Pagination";
// import FeedbackForm from "./FeedbackForm";
import ProductList from "./ProductList";
import FeedbackForm from "./FeedbackFrom";

const ITEMS_PER_PAGE = 6;

const NewsFeed = () => {
  const dispatch = useDispatch();
  const { data, loading, currentPage, viewMode } = useSelector((state) => state.news);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setTimeout(() => dispatch(fetchPosts()), 5000);
  }, [dispatch]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/4 p-6 bg-white shadow-lg rounded-xl flex flex-col space-y-6 relative">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div>
            <h3 className="font-bold">Hi Reader,</h3>
            <p className="text-gray-600">Here’s your News!</p>
          </div>
        </div>

        {/* View Toggle */}
        <div className="bg-gray-100 p-4 border border-red-500 flex flex-col items-center rounded-lg">
          <h4 className="font-bold mb-2">View Toggle</h4>
          <div className="flex space-x-2">
            <button 
              className={`px-4 py-2 rounded-lg ${viewMode === "list" ? "bg-green-400" : "bg-gray-300"}`}
              onClick={() => dispatch(toggleView())}
            >📄</button>
            <button 
              className={`px-4 py-2 rounded-lg ${viewMode === "grid" ? "bg-green-400" : "bg-gray-300"}`}
              onClick={() => dispatch(toggleView())}
            >📋</button>
          </div>
        </div>

        {/* Feedback Button */}
        <div className="bg-gray-100 p-4 rounded-lg relative">
          <h4 className="font-bold mb-2">Have a Feedback?</h4>
          <button 
            className="w-full bg-green-500 text-white p-2 rounded-lg"
            onClick={() => setShowFeedback(!showFeedback)}
          >We’re Listening!</button>
        </div>

        {/* Sliding Feedback Form */}
        <div 
          className={`absolute top-0 left-0 w-full h-full bg-white shadow-lg p-6 rounded-xl transform transition-transform ${
            showFeedback ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button 
            className="absolute top-4 right-4 text-red-500"
            onClick={() => setShowFeedback(false)}
          >
            ✖
          </button>
          <FeedbackForm closeForm={() => setShowFeedback(false)} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {loading ? (
          <p className="text-lg font-bold">Loading...</p>
        ) : (
          <>
            <ProductList posts={paginatedNews} viewMode={viewMode} removePost={removePost} startIndex={startIndex} />
            <Pagination totalPages={totalPages} setPage={setPage} />
          </>
        )}
      </main>
    </div>
  );
};

export default NewsFeed;
