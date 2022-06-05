import React from "react";
import { render, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Form from "../components/Form";
//import { shallow, mount } from 'enzyme';
import {configure, shallow} from 'enzyme';

import Adapter from 'enzyme-adapter-react-15';
configure({ adapter: new Adapter() });

describe('<Form />', () => {
  let form;
  beforeEach(() => {
    form = shallow(<Form />);
  });
  it("The form should have an input for the videogame's name", () => {
    const element = screen.getByLabelText("Name");
    expect(element.type).toBe("text");
  });
 /*  it("The form should have an input for the videogame's descripcion", () => {
    const element = screen.getByLabelText("Description");
    expect(element.type).toBe("text");
  });
  it("The form should have an input for the videogame's image", () => {
    const element = screen.getByLabelText("Image");
    expect(element.type).toBe("url");
  }); */
});