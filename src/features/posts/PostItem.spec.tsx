import { shallow, ShallowWrapper } from "enzyme";
import React from "react";

import PostItem, { PostItemProps } from "./PostItem";

describe("Rendering the PostItem component", () => {
  const mockProps: PostItemProps = {
    title: "Whiskey Business",
    body:
      "Man bun DIY lomo thundercats craft beer actually unicorn gochujang mlkshk la croix fingerstache."
  };

  it("Should render the PostItem component correctly", () => {
    const wrapper: ShallowWrapper = shallow(<PostItem {...mockProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("Should render the PostItem component with the supplied attributes", () => {
    const wrapper: ShallowWrapper = shallow(<PostItem {...mockProps} />);

    const cardTitleHtml = wrapper.find("CardTitle").html();
    const cardBodyHtml = wrapper
      .find("CardBody")
      .last()
      .html();

    expect(cardTitleHtml).toContain(mockProps.title);
    expect(cardBodyHtml).toContain(mockProps.body);
  });
});
