import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, removePost, setPage, toggleView } from "./store";
import Pagination from "./Pagination";
import PostList from "./ProductList";
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
  <>
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {loading ? (
        <p className="text-lg font-bold">Loading...</p>
      ) : (
        <>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg mb-4 shadow-md" onClick={() => dispatch(toggleView())}>Toggle View</button>
          <PostList posts={paginatedNews} viewMode={viewMode} removePost={removePost} startIndex={startIndex} />
          <Pagination totalPages={totalPages} setPage={setPage} />
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg mt-4 shadow-md" onClick={() => setShowFeedback(true)}>We’re Listening</button>
        </>
      )}
     
    </div>
     {showFeedback && <FeedbackForm closeForm={() => setShowFeedback(false)} />}
  </>
  );
};

export default NewsFeed;