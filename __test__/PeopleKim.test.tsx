// 테스트 실행은 명령창에서 npm run test 입력합니다.
// 그리고 결과 지켜 봅니다.
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

interface testPeopleKimProps {
    name: string;
    age: number;
}

const PeopleKimProps = (props: testPeopleKimProps) =>  {
    return (
        <div>
            <li>{props.name}</li>
            <li>{props.age}</li>
        </div>
    );
}

const PeopleKim = () => {
    return <div>People Kim</div>;
}

describe("화면에 People Kim이라는 글자를 출력할 수 있습니다.", () => {
    it("People Kim이라는 글자를 가진 요소가 화면에 있다.", () => {
        render(<PeopleKim />);
        const textElement = screen.getByText("People Kim");
        expect(textElement).toBeInTheDocument();
    });
});

describe("컴포넌트에 Props를 전달할 수 있습니다.", () => {
    it("아래 제공되는 props를 전달하면 화면에 렌더링 됩니다.", () => {
        const testPorps = {
            name: "People Kim",
            age: 25,
        };
        render(<PeopleKimProps {...testPorps} />);
        const nameElement = screen.getByText(testPorps.name);
        const ageElement = screen.getByText(testPorps.age);

        expect(nameElement).toBeInTheDocument();
        expect(ageElement).toBeInTheDocument();
    });
});
