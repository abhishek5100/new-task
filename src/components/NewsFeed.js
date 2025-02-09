import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removePost, setPage, toggleView } from "./store";
import Pagination from "./Pagination";
import ProductList from "./ProductList";
import { FaThList, FaRegListAlt } from "react-icons/fa";
import FeedbackForm from "./FeedbackFrom";

const ITEMS_PER_PAGE = 6;

const NewsFeed = () => {
  const dispatch = useDispatch();
  const { data, loading, currentPage, viewMode } = useSelector((state) => state.news);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    setTimeout(() => dispatch(fetchPosts()), 1000);
  }, [dispatch]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/4 p-6 bg-white shadow-lg rounded-2xl flex flex-col space-y-6 border border-gray-300">
        <div className="flex items-center space-x-4">
          <img
            src="https://via.placeholder.com/50"
            alt="User Avatar"
            className="w-12 h-12 rounded-full border border-gray-400"
          />
          <div>
            <h3 className="font-bold text-lg">Hi Reader,</h3>
            <p className="text-gray-600">Here’s your News!</p>
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col items-center  rounded-lg shadow-md">
          <h4 className="font-bold mb-2">View Toggle</h4>
          <div className="flex rounded-lg shadow-md  ">
            <button
              className={`p-5  ${viewMode === "list" ? "bg-green-200" : "bg-gray-300"}`}
              onClick={() => dispatch(toggleView())}
            >
              <FaThList size={20} />
            </button>
            <button
              className={`p-5  ${viewMode === "grid" ? "bg-green-200" : "bg-gray-300"}`}
              onClick={() => dispatch(toggleView())}
            >
              <FaRegListAlt size={20} />
            </button>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center">
          <h4 className="font-bold mb-2">Have a Feedback?</h4>
          <button
            className="w-full bg-green-200 text-black py-2 rounded-lg font-semibold"
            onClick={() => setShowFeedback(!showFeedback)}
          >
            We’re Listening!
          </button>
        </div>
        {showFeedback && (
          <div className="absolute z-50 top-0 left-0 w-fit h-full bg-white shadow-lg p-6 rounded-xl">
            <button
              className="absolute top-4 right-4 text-red-500"
              onClick={() => setShowFeedback(false)}
            >
              ✖
            </button>
            <FeedbackForm closeForm={() => setShowFeedback(false)} />
          </div>
        )}
      </aside>

      <main className="flex-1 p-6">
        {loading ? (
          <p className="text-lg font-bold">Loading...</p>
        ) : (
          <>
            <ProductList
              posts={paginatedNews}
              viewMode={viewMode}
              removePost={removePost}
              startIndex={startIndex}
            />
            <Pagination totalPages={totalPages} setPage={setPage} />
          </>
        )}
      </main>
    </div>
  );
};

export default NewsFeed;