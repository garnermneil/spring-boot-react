import React from "react";
import {shallow} from "enzyme";
import CheckBoxWithLabel from "./checkbox";

beforeAll(() => {
    console.log(">>> Before All");
});

beforeEach(() => {
    console.log(">>> Before Each");
});

afterEach(() => {
    console.log(">>> After Each");
});

afterAll(() => {
    console.log(">>> After All");
});

describe('matching cities to foods', () => {
    beforeAll(() => {
        console.log(">>> Describe Before All");
    });

    beforeEach(() => {
        console.log(">>> Describe Before Each");
    });

    afterEach(() => {
        console.log(">>> Describe After Each");
    });

    afterAll(() => {
        console.log(">>> Describe After All");
    });

    test("CheckboxWithLabel changes the text after click", () => {
        const checkbox = shallow(<CheckBoxWithLabel labelOn="On" labelOff="Off"/>);
        expect(checkbox.text()).toEqual("Off");
        checkbox.find('input').simulate('change');
        expect(checkbox.text()).toEqual("On");
    });

    test('this test will run', () => {
        expect(true).not.toBeFalsy();
    });
});
