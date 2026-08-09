import { headers } from "next/headers";
import { getSite } from "../lib/site";

export default async function Home() {

  const headerList = await headers();

  const host =
    headerList.get("host") || "";

  const site =
    getSite(host);


  return (

    <div id="page-wrapper">


      <section id="header">

        <h1>
          <a href="#">
            VX账号服务平台
          </a>
        </h1>

      </section>



      <section id="banner">

        <header>

          <h2>
            专业微信账号服务商
          </h2>


          <p>
            提供专业微信账号服务解决方案
          </p>

        </header>

      </section>



      <section className="wrapper style1">

        <div className="container">


          <header className="major">

            <h2>
              服务项目
            </h2>

          </header>



          <p>
            微信账号资源服务
          </p>


          <p>
            {site.keywords}
          </p>


        </div>

      </section>


    </div>

  );

}
