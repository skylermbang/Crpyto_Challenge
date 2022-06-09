import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import '@testing-library/jest-dom'
import Loader from '../Loader'

let container = null;
beforeEach(() => {
    // 렌더링 대상으로 DOM 엘리먼트를 설정합니다.
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // 기존의 테스트 환경을 정리합니다.
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders without crashing", () => {
    act(() => {
        render(<Loader type="spin" color="0,0,0" message={"wait please"}></Loader>, container);
    });
    expect(getByTestId('greeting-text').textContent).toBe("wait please")

});
