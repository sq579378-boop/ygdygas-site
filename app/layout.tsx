import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { getSite } from "../lib/site";


export async function generateMetadata(): Promise<Metadata> {

  const headerList = await headers();

  const host = headerList.get("host") || "";

  const site = getSite(host);


  return {
    title: site.title,
    description: site.description,
  };

}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (

    <html lang="zh-CN">

      <body>

        {children}

      </body>

    </html>

  );

}
