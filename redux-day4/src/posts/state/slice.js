import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await res.json();
  }
);

const initialState = {
  posts: [],
  status: 'idle',
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const post = state.posts.find(p => p.id === postId);
      if (post && post.reactions && post.reactions[reaction] !== undefined) {
        post.reactions[reaction]++;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => { state.status = 'loading'; })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        const reactions = { thumbsUp: 0, thumbsDown: 0, heart: 0, clap: 0 };
        const postsWithReactions = action.payload.map(post => {
            return { ...post, reactions: { ...reactions } };
        });

        state.status = 'succeeded';
        state.posts = postsWithReactions;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const state = (state) => state.postsReducer;
export const { reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
