import { configureStore, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("news/fetchPosts", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json();
});

const newsSlice = createSlice({
  name: "news",
  initialState: { data: [], loading: true, currentPage: 1, viewMode: "list" },
  reducers: {
    removePost: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },  
    toggleView: (state) => {
      state.viewMode = state.viewMode === "list" ? "grid" : "list";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
  },
});

export const { removePost, setPage, toggleView } = newsSlice.actions;

// here define store only for single slice other wise i will have to define in onther page 
export const store = configureStore({ reducer: { news: newsSlice.reducer } });
