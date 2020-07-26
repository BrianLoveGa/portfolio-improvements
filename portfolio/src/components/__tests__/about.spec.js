import React from "react";
import About from "../about";
import ReactDom from "react-dom";

// basic render check

describe("it should render without crashing as expected", () => {
  it("Should be about me works", () => {
    const div = document.createElement("div");
    ReactDom.render(<About />, div);
  });
});
