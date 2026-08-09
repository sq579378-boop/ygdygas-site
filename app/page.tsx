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

            {site.title}

          </a>

        </h1>

      </section>



      <section id="banner">

        <header>

          <h2>

            {site.title}

          </h2>


          <p>

            {site.description}

          </p>


        </header>

      </section>



      <section className="wrapper style1">


        <div className="container">


          <h3>

            服务项目

          </h3>


          <p>

            {site.keywords}

          </p>


        </div>


      </section>



    </div>

  );

}
