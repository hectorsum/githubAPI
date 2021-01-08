import React from "react";
import "@testing-library/jest-dom";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Root } from "../components/Root/Root";
import { createSerializer } from "enzyme-to-json";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Testing <Root/>", () => {
  const wrapper = shallow(<Root />);
  test("Should show <Root/> component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
