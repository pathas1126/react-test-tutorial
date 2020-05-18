import React from "react";
import { shallow } from "enzyme";
import NameForm from "./NameForm";

describe("NameForm", () => {
  let component = null;

  // 테스트용 onInsert 함수, changed 값을 바꿔줌
  let changed = null;
  const onInsert = (name) => {
    changed = name;
  };
  it("renders correctly", () => {
    component = shallow(<NameForm onInsert={onInsert} />);
  });

  it("matches snapshot", () => {
    expect(component).toMatchSnapshot();
  });

  describe("insert new text", () => {
    it("has a form", () => {
      expect(component.find("form").exists()).toBe(true);
    });
    it("has an input", () => {
      expect(component.find("input").exists()).toBe(true);
    });
    it("simulates input change", () => {
      const mockedEvent = {
        target: {
          value: "hello",
        },
      };
      // 이벤트 시뮬레이트,
      // simulate의 두 번째 매개변수로 이벤트 객체 전달
      component.find("input").simulate("change", mockedEvent);
      expect(component.find("input").prop("value")).toBe("hello");
    });
    it("simualtes from submut", () => {
      const mockedEvent = {
        // onSubmit에서 preventDefault를 호출하므로 가짜 함수 추가
        preventDefault: jest.fn(),
      };
      component.find("form").simulate("submit", mockedEvent);
      expect(component.find("input").prop("value")).toBe("");
      expect(changed).toBe("hello");
    });
  });
});
