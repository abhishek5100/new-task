
import FeedBackForm from "./components/FeedBackForm";
import ProductCard from "./components/ProductCard";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div >
      <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/feedback" element={<FeedBackForm />} />
      </Routes>
    </div>
  );
}

export default App;
