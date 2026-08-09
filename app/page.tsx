import { headers } from "next/headers";
import { getSite } from "../lib/site";


export default async function Home() {


  const headerList = await headers();

  const host = headerList.get("host") || "";

  const site = getSite(host);



  return (

    <div id="page-wrapper">


      {/* 顶部 */}

      <section id="header">

        <h1>

          <a href="#">

            {site.title}

          </a>

        </h1>


        <nav id="nav">

          <ul>

            <li className="current">

              <a href="#">

                首页

              </a>

            </li>


            <li>

              <a href="#service">

                服务

              </a>

            </li>


            <li>

              <a href="#about">

                关于我们

              </a>

            </li>


            <li>

              <a href="#contact">

                联系

              </a>

            </li>


          </ul>

        </nav>


      </section>




      {/* 首页大图区域 */}


      <section id="banner">


        <header>


          <h2>

            专业微信账号服务商

          </h2>


          <p>

            {site.description}

          </p>


        </header>


      </section>





      {/* 服务项目 */}


      <section id="service" className="wrapper style1">


        <div className="container">


          <header className="major">

            <h2>

              服务项目

            </h2>


          </header>



          <div className="row">


            <div className="col-4 col-12-medium">

              <section className="box">


                <h3>

                  微信账号资源

                </h3>


                <p>

                  提供多类型微信账号资源服务，满足不同业务需求。

                </p>


              </section>

            </div>




            <div className="col-4 col-12-medium">


              <section className="box">


                <h3>

                  快速服务

                </h3>


                <p>

                  简化服务流程，提高响应效率。

                </p>


              </section>


            </div>





            <div className="col-4 col-12-medium">


              <section className="box">


                <h3>

                  售后支持

                </h3>


                <p>

                  提供持续的服务支持。

                </p>


              </section>


            </div>



          </div>


        </div>


      </section>





      {/* 关于我们 */}


      <section id="about" className="wrapper style2">


        <div className="container">


          <header className="major">


            <h2>

              关于我们

            </h2>


            <p>

              专注微信账号服务领域

            </p>


          </header>



          <p>

            我们致力于提供专业、稳定、高效的微信账号服务方案，
            为客户提供便捷可靠的服务体验。

          </p>



          <p>

            关键词：

            {site.keywords}

          </p>


        </div>


      </section>





      {/* 联系 */}


      <section id="contact" className="wrapper style1">


        <div className="container">


          <header>

            <h2>

              联系我们

            </h2>

          </header>


          <p>

            如需了解更多服务信息，欢迎联系我们。

          </p>


        </div>


      </section>





      {/* 底部 */}


      <section id="footer">


        <div className="container">


          <p>

            {site.title}

          </p>


          <p>

            {site.description}

          </p>


        </div>


      </section>



    </div>

  );

}
