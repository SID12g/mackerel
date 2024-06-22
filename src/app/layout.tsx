import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Wrapper from "@/components/wrapper/wrapper";
import Image from "next/image";
import logo from "@/../public/logo.jpg";
import Install from "@/components/install/install";
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
        <div id="install" style={{}}>
          <p style={{ fontSize: 28, fontWeight: 600 }}>Mackerel 다운로드</p>
          <Image
            style={{ marginBottom: 40 }}
            src={logo}
            width={128}
            height={128}
            alt="logo"
          />
          <Install />
        </div>
        <div id="width" />
        <main>
          <Wrapper>{children}</Wrapper>
          <Navbar />
        </main>
      </body>
    </html>
  );
}
