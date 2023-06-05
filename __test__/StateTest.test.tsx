import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

const StateTest = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <button role="button" onClick={() => setCount(count + 1)}>이건버튼</button>
            <span style={{ color: "red" }} role="counter">{count}</span>
        </div>
    );

}

describe("리액트 기본 훅인 useState를 사용할 수 있습니다.", () => {
    beforeEach(() => {
        render(<StateTest />);
    });

    it("버튼 누르면 숫자 올라갑니다.", () => {
        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(screen.getByText("1")).toBeInTheDocument();
    });

    it("숫자를 표시하는 텍스트의 색깔은 red, 빨간색이어야 합니다.", () => {
        const display = screen.getByRole("counter");
        expect(display).toHaveStyle({ color: "red" });
    });
});
