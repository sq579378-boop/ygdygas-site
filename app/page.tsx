import { headers } from "next/headers";
import { getSite } from "@/lib/site";


export default async function Home() {


  const headerList = await headers();

  const host =
    headerList.get("host") || "";


  const site =
    getSite(host);



  return (

    <div id="page-wrapper">


      {/* Header */}

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





      {/* Services */}


      <section id="service" className="wrapper style1">


        <div className="container">


          <div className="row">


            <div className="col-4 col-12-medium">


              <section className="box">


                <h3>

                  优质账号资源

                </h3>


                <p>

                  提供多类型微信账号资源，
                  满足不同业务需求。

                </p>


              </section>


            </div>





            <div className="col-4 col-12-medium">


              <section className="box">


                <h3>

                  快速服务

                </h3>


                <p>

                  简化流程，
                  提供快速响应服务。

                </p>


              </section>


            </div>





            <div className="col-4 col-12-medium">


              <section className="box">


                <h3>

                  售后支持

                </h3>


                <p>

                  提供完善的服务支持。

                </p>


              </section>


            </div>


          </div>


        </div>


      </section>      {/* About */}


      <section id="about" className="wrapper style2">


        <div className="container">


          <header className="major">


            <h2>

              微信账号服务平台

            </h2>


            <p>

              专注微信账号资源服务

            </p>


          </header>



          <div className="row">


            <div className="col-6 col-12-medium">


              <img
                src="/images/pic01.jpg"
                alt="微信账号服务"
                style={{
                  width: "100%"
                }}
              />


            </div>




            <div className="col-6 col-12-medium">


              <h3>

                关于我们

              </h3>


              <p>

                我们专注微信账号服务领域，
                为客户提供便捷、高效的账号服务方案。

              </p>


              <p>

                关键词：

                {site.keywords}

              </p>


            </div>


          </div>


        </div>


      </section>





      {/* Portfolio */}


      <section className="wrapper style1">


        <div className="container">


          <header className="major">


            <h2>

              服务展示

            </h2>


          </header>




          <div className="row">


            <div className="col-4 col-12-medium">


              <section className="box">


                <a className="image featured">

                  <img
                    src="/images/pic02.jpg"
                    alt=""
                  />

                </a>


                <header>

                  <h3>

                    微信账号资源

                  </h3>


                </header>


                <p>

                  提供稳定账号资源选择。

                </p>


              </section>


            </div>





            <div className="col-4 col-12-medium">


              <section className="box">


                <a className="image featured">

                  <img
                    src="/images/pic03.jpg"
                    alt=""
                  />

                </a>


                <header>

                  <h3>

                    专业服务

                  </h3>


                </header>


                <p>

                  简单快捷的服务流程。

                </p>


              </section>


            </div>





            <div className="col-4 col-12-medium">


              <section className="box">


                <a className="image featured">

                  <img
                    src="/images/pic04.jpg"
                    alt=""
                  />

                </a>


                <header>

                  <h3>

                    售后保障

                  </h3>


                </header>


                <p>

                  完善的服务支持。

                </p>


              </section>


            </div>


          </div>


        </div>


      </section>





      {/* Contact */}


      <section id="contact" className="wrapper style2">


        <div className="container">


          <header>


            <h2>

              联系我们

            </h2>


          </header>



          <p>

            如需了解更多微信账号服务信息，
            欢迎联系我们。

          </p>



        </div>


      </section>





      {/* Footer */}


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
