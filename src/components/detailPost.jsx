import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailPost = () => {
  let { postId } = useParams();
  const posts = useSelector((state) => state.post);
  const post = posts.find((p) => p.postId == postId);
  return (
    <div>
      <h1>記事詳細</h1>
      <p>{post.postName}</p>
      <p>{post.postDetail}</p>
    </div>
  );
};

export default DetailPost;
