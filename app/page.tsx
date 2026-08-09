import { headers } from "next/headers";
import { getSite } from "../lib/site";


export default async function Home() {

  const headerList = await headers();

  const host = headerList.get("host") || "";

  const site = getSite(host);


  return (

    <>

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
              提供稳定、高效的微信账号资源服务
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
                专业服务，为客户提供便捷体验
              </p>


            </header>



            <div className="row">


              <div className="col-4 col-12-medium">

                <section>

                  <h3>
                    优质资源
                  </h3>

                  <p>
                    提供丰富账号资源选择。
                  </p>

                </section>

              </div>



              <div className="col-4 col-12-medium">

                <section>

                  <h3>
                    快速服务
                  </h3>

                  <p>
                    快速响应客户需求。
                  </p>

                </section>

              </div>



              <div className="col-4 col-12-medium">

                <section>

                  <h3>
                    售后支持
                  </h3>

                  <p>
                    提供完善服务支持。
                  </p>

                </section>

              </div>


            </div>


          </div>

        </section>





        {/* Main */}

        <section className="wrapper style2">

          <div className="container">


            <header>

              <h2>
                关于我们
              </h2>


            </header>


            <p>

              我们专注微信账号服务领域，
              致力于提供专业、便捷的账号资源服务。

            </p>



            <p>

              {site.description}

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

              如需了解更多服务，请联系客服。

            </p>


          </div>


        </section>


      </div>



      <link
        rel="stylesheet"
        href="/assets/css/main.css"
      />


    </>

  );

}
