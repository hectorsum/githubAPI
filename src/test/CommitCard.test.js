import React from "react";
import "@testing-library/jest-dom";
import { shallow,configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { CommitCard } from "../components/Card/CommitCard";
import { createSerializer } from "enzyme-to-json";

configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

describe("Testing <CommitCard/>", () => {
  const key = "key";
  const commit = {message: '1'};
  const wrapper = shallow(<CommitCard key={key} commit={commit} />);
  test("Should show the <CommitCard/> component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});