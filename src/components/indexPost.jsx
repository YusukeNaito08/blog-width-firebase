import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const IndexPost = () => {
  // const posts = useSelector((state) => state.post);
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    const docRef = collection(db, "post");
    getDocs(docRef).then((snapShot) => {
      const posts = snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setFetchedPosts(posts);
    });
  }, []);

  return (
    <div>
      <h1>記事一覧</h1>
      {/* <ul>
        {posts.map((post) => {
          return (
            <li key={post.postId}>
              <Link to={`/detailPost/${post.postId}`}>
                {post.postName}
                {post.postDetail}
              </Link>
            </li>
          );
        })}
      </ul> */}

      {fetchedPosts.map((post) => {
        return (
          <li key={post.id}>
            <Link to={`/detailPost/${post.postId}`}>
              {post.postName}
              {post.postDetail}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default IndexPost;
