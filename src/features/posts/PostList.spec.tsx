import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import { MOCK_POSTS } from "./mocks";
import PostItem from "./PostItem";
import PostList, { PostListProps } from "./PostList";

describe("Rendering the PostList component", () => {
  const mockProps: PostListProps = {
    posts: MOCK_POSTS.slice(0, 5),
    title: "Mock Posts Title"
  };

  it("Should render the PostList component correctly", () => {
    const wrapper: ShallowWrapper = shallow(<PostList {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("Should render the PostList component with the supplied attributes", () => {
    const wrapper: ShallowWrapper = shallow(<PostList {...mockProps} />);

    const postItemHtml = wrapper
      .find("PostItem")
      .first()
      .getElement();

    expect(postItemHtml.props.title).toEqual(mockProps.posts[0].title);
    expect(postItemHtml.props.body).toEqual(mockProps.posts[0].body);
  });
});
