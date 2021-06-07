import React from "react";
import renderer from "react-test-renderer";
import App from "./App";

// eslint-disable-next-line no-undef
test("App snapshot test", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  // eslint-disable-next-line no-undef
  expect(tree).toMatchSnapshot();
});
