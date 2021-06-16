import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";

import { setCurrentUser } from "features/auth/authSlice";
import PostListContainer from "features/posts/PostListContainer";
import { loadPosts } from "features/posts/postSlice";
import "./App.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPosts());
    dispatch(setCurrentUser());
  });

  return (
    <Container fluid="md">
      <PostListContainer />
    </Container>
  );
}
