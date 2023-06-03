// 유저 데이터를 반환하는 함수를 만듭니다. (비동기)
// 유저 데이터는 3초 뒤에 반환됩니다.

interface UserData {
    name: string;
    age: number;
}

// 여기다 구현하면 됩니다.
const yourFunction = async () => {};

describe("유저 데이터를 반환하는 함수를 만듭니다.", () => {
    it("함수가 반환하는 데이터는 json형식입니다.", async () => {
        let result: UserData | undefined;
        // 처음에 보면 타입에러 뜰텐데 맞춰서 내부 구현

        if (result !== undefined && typeof result === typeof { name: "", age: 0 }) {
            expect(result).toEqual({ name: "People Kim", age: 27 });
        } else {
            throw new Error("구현하고 테스트 돌리세요");
        }
    });
});
