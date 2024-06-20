import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Wrapper from "@/components/wrapper/wrapper";

export const metadata: Metadata = {
  title: "Mackerel",
  description: "응화~",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main>
          <Wrapper>{children}</Wrapper>
        </main>
        <Navbar />
      </body>
    </html>
  );
}
