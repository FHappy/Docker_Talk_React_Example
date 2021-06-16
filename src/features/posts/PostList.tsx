import React from "react";

import PostItem from "./PostItem";
import { Post } from "./types";

export interface PostListProps {
  posts: Post[];
  title: string;
}

const PostList: React.FC<PostListProps> = ({ posts, title }) => {
  return (
    <>
      <h3 style={{ marginBottom: "1rem" }}>{title}</h3>

      <div>
        {posts.map(post => (
          <PostItem key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    </>
  );
};

export default PostList;
