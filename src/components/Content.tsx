"use client";
import Image from "next/image";
import { useRef } from "react";

const ContentComponent = () => {
    const contentRef = useRef<HTMLElement>(null);
    return (
        <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                flexDirection: "column",
            }}
        >
            <Image
                style={{ transform: "scale(0.3)" }}
                src="/별빛상단starlight_bi.png"
                alt="logo"
                width={1302}
                height={283}
            />
            <h1>테스트는 명세, 문서의 역할을 하기도 합니다.</h1>
            <p>
                나열된 요구사항 문서, SRS도 좋은 문서지만 테스트로 하여금 필요한 만큼의 코드를
                작성할 수 있습니다.
            </p>
            <p>
                코드 작성 전 실패하는 테스트를 먼저 작성 후, 그 후 통과하는 구현코드를 작성하는 것을
                TDD라고 합니다.
            </p>
            <p>
                테스트를 통과하는 코드를 작성하면서, 요구사항을 만족하는 프로그램을 만드는 연습을
                합니다. 이는 제품을 직접 완성해 나갈 수 있는 밑바탕이 됩니다. ㅎㅇㅌ
            </p>
        </div>
    );
};

export default ContentComponent;
