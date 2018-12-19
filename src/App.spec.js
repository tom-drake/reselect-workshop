import React from "react";
import ReactDOM from "react-dom";

beforeAll(() => {
  global.Prism = {
    highlightElement: jest.fn()
  };
});

test("renders", () => {});
