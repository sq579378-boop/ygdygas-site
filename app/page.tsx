import { headers } from "next/headers";
import { getSite } from "@/lib/site";


export default async function Home() {


  const headerList = await headers();

  const host =
    headerList.get("host") || "default";


  const site =
    getSite(host);



  return (

    <div id="page-wrapper">


      {/* Header */}

      <section id="header">


        <h1>

          {site.title}

        </h1>


        <p>

          专业微信账号服务平台

        </p>


      </section>




      {/* Banner */}

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




      {/* Features */}

      <section className="wrapper style1">


        <div className="container">


          <header className="major">


            <h2>

              微信账号服务

            </h2>


            <p>

              稳定服务，快速响应

            </p>


          </header>



          <div className="row">


            <div className="col-4 col-12-medium">

              <section>

                <h3>
                  优质资源
                </h3>


                <p>
                  提供多种微信账号服务选择。
                </p>


              </section>

            </div>




            <div className="col-4 col-12-medium">

              <section>

                <h3>
                  快速交付
                </h3>


                <p>
                  简化流程，提高服务效率。
                </p>


              </section>

            </div>




            <div className="col-4 col-12-medium">

              <section>

                <h3>
                  售后支持
                </h3>


                <p>
                  提供完善服务保障。
                </p>


              </section>

            </div>


          </div>


        </div>


      </section>






      {/* About */}

      <section className="wrapper style2">


        <div className="container">


          <header>

            <h2>

              关于我们

            </h2>


          </header>


          <p>

            我们专注微信账号服务领域，
            为用户提供专业的账号服务方案。

          </p>



          <p>

            当前站点关键词：

            {site.keywords}

          </p>



        </div>


      </section>






      {/* Footer */}

      <section id="footer">


        <div className="container">


          <header>

            <h2>

              联系我们

            </h2>


          </header>


          <p>

            欢迎咨询微信账号相关服务。

          </p>


        </div>


      </section>



    </div>

  );

}
