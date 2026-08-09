import { headers } from "next/headers";
import { getSite } from "../lib/site";


export default async function Home() {

  const headerList = await headers();

  const host =
    headerList.get("host") || "";


  const site =
    getSite(host);


  return (

    <main>

      <h1>
        {site.title}
      </h1>


      <p>
        {site.description}
      </p>


      <p>
        关键词：
        {site.keywords}
      </p>


      <hr />


      <h2>
        专业微信账号服务商
      </h2>


      <p>
        当前访问域名：
        {host}
      </p>


    </main>

  );

}
