import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import { Provider } from "react-redux";

import store from "app/store";
import PostListContainer from "./PostListContainer";

describe("Rendering the container for both PostList components", () => {
  it("Should render the PostListContainer component correctly", () => {
    const wrapper: ShallowWrapper = shallow(
      <Provider store={store}>
        <PostListContainer />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
