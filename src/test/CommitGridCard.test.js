import React from "react";
import "@testing-library/jest-dom";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { CommitGridCard } from "../components/GridCard/CommitGridCard";
import { createSerializer } from "enzyme-to-json";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Testing <CommitGridCard/>", () => {
  const wrapper = shallow(<CommitGridCard />);
  test("Should show <CommitGridCard/> component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
