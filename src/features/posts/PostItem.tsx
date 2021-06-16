import React from "react";
import Card from "react-bootstrap/Card";

export interface PostItemProps {
  title: string;
  body: string;
}

const PostItem: React.FC<PostItemProps> = ({ title, body }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Body>{body}</Card.Body>
      </Card.Body>
    </Card>
  );
};

export default PostItem;
