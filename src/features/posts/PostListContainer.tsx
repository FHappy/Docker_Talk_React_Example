import React from "react";
import { useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";

import PostList from "./PostList";
import { selectPostsByCurrentUser, selectPostsByOtherUsers } from "./postSlice";

export interface PostListContainerProps {}

const PostListContainer: React.FC<PostListContainerProps> = () => {
  const postsByCurrentUser = useSelector(selectPostsByCurrentUser);
  const postsByOtherUsers = useSelector(selectPostsByOtherUsers);

  return (
    <div style={{ padding: "2rem 0" }}>
      <Row>
        <Col xs={12} lg={6}>
          <PostList posts={postsByCurrentUser} title={"Your Posts"} />
        </Col>

        <Col xs={12} lg={6}>
          <PostList posts={postsByOtherUsers} title={"Posts by Other Users"} />
        </Col>
      </Row>
    </div>
  );
};

export default PostListContainer;
