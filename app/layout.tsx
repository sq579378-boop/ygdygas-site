import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "测试123456",
  description: "专业微信账号服务商",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="zh-CN">

      <head>

        <link
          rel="stylesheet"
          href="/assets/css/main.css"
        />

        <link
          rel="stylesheet"
          href="/assets/css/fontawesome-all.min.css"
        />

      </head>


      <body>

        {children}

      </body>

    </html>

  );

}
