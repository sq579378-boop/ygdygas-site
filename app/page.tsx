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





      {/* 服务 */}


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
                  提供多类型微信账号服务。
                </p>

              </section>

            </div>



            <div className="col-4 col-12-medium">

              <section className="box">

                <h3>
                  快速响应
                </h3>


                <p>
                  简化流程，提高服务效率。
                </p>

              </section>

            </div>



            <div className="col-4 col-12-medium">

              <section className="box">

                <h3>
                  售后支持
                </h3>


                <p>
                  提供持续服务支持。
                </p>

              </section>

            </div>


          </div>


        </div>


      </section>





      {/* 图片展示 */}


      <section className="wrapper style2">


        <div className="container">


          <header className="major">

            <h2>
              服务展示
            </h2>


          </header>



          <div className="row">


            <div className="col-4 col-12-medium">

              <section className="box">

                <img
                  src="/assets/images/pic01.jpg"
                  alt=""
                  style={{
                    width:"100%"
                  }}
                />

                <h3>
                  微信账号服务
                </h3>

              </section>

            </div>




            <div className="col-4 col-12-medium">

              <section className="box">

                <img
                  src="/assets/images/pic02.jpg"
                  alt=""
                  style={{
                    width:"100%"
                  }}
                />

                <h3>
                  专业服务
                </h3>

              </section>

            </div>




            <div className="col-4 col-12-medium">

              <section className="box">

                <img
                  src="/assets/images/pic03.jpg"
                  alt=""
                  style={{
                    width:"100%"
                  }}
                />

                <h3>
                  服务保障
                </h3>

              </section>

            </div>


          </div>


        </div>


      </section>





      {/* 关于 */}


      <section id="about" className="wrapper style1">


        <div className="container">


          <h2>
            关于我们
          </h2>


          <p>

            {site.description}

          </p>


          <p>

            关键词：

            {site.keywords}

          </p>


        </div>


      </section>





      {/* Footer */}


      <section id="footer">


        <div className="container">


          <p>
            {site.title}
          </p>


        </div>


      </section>



    </div>

  );

}
