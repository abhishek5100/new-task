import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/store";
import NewsFeed from "./components/NewsFeed";

const App = () => (
  <Provider store={store}>
    <NewsFeed />
  </Provider>
);

export default App;
