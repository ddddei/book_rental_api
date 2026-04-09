import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "도서 대여 관리",
  description: "도서 대여 관리 랜딩 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}