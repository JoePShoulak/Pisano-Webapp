import React from "react";
import App from "./App";
import { mount } from "enzyme";

test("renders learn react link", () => {
  const x = mount(<App />);

  expect(x.text()).toEqual("Hello, World!");
});
