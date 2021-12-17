import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import MyComponent from "./MyComponent";

describe("<MyComponent />", () => {
  it("should render <MyComponent />", () => {
    const wrapper = shallow(<MyComponent />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
