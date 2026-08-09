import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "微信账号服务平台",
  description: "专业微信账号服务商，提供微信账号资源服务",
  keywords: [
    "微信账号",
    "微信号服务",
    "微信账号资源"
  ],
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

      </head>


      <body>

        {children}

      </body>


    </html>

  );
}
