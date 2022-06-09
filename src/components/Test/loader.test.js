import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom'
import Loader from '../Loader'

let container = null;
beforeEach(() => {
    // settting DOM
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // clear the previous test 
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders", () => {
    act(() => {
        render(<Loader type="spin" color="0,0,0" message={"wait please"} />, container);
    });
    expect(container.textContent).toBe("wait please");
})