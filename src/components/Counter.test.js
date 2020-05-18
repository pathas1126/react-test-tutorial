import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe("Counter", () => {
  let component = null;

  it("renders correctly", () => {
    component = shallow(<Counter />);
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  describe("button click", () => {
    it("+ button click", () => {
      component.find("button").first().simulate("click");
      expect(component.find("h2").text()).toBe("1");
    });
    it("- button click", () => {
      component.find("button").last().simulate("click");
      expect(component.find("h2").text()).toBe("0");
    });
  });
});
