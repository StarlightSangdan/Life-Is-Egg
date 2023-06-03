export const metadata = {
    title: "테스트 명세 확인 후 구현작업",
    description: "이모티콘 잘 쓰고 있다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>{children}</body>
        </html>
    );
}
