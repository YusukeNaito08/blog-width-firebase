import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: [
    {
      postId: "1",
      postName: "サンプル記事1",
      postDetail: "サンプル記事1のテキストです。",
    },
    {
      postId: "2",
      postName: "サンプル記事2",
      postDetail: "サンプル記事2のテキストです。",
    },
    {
      postId: "3",
      postName: "サンプル記事3",
      postDetail: "サンプル記事3のテキストです。",
    },
  ],
});

export default postSlice.reducer;
