import { customRender } from "@frauches/test-commons/react-testing-library";
import React from "react";
import { Text } from "./index";

const render = customRender();

describe("<Text />", () => {
  it("renders h1 tag", () => {
    const { container } = render(<Text tag="h1">Sample Text</Text>);

    expect(container).toMatchSnapshot();
  });
});
