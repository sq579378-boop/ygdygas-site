import { headers } from "next/headers";
import { getSite } from "../lib/site";

export default async function Home() {

  const headerList = await headers();

  const host = headerList.get("host") || "";

  const site = getSite(host);

  const imgStyle = {
    width: "100%",
    height: "220px",
    objectFit: "cover" as const,
    borderRadius: "8px"
  };


  return (

    <div id="page-wrapper">


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





      <section id="banner">

        <header>

          <h2>
            {site.title}
          </h2>


          <p>
            {site.description}
          </p>


          <br />


          <a 
            href="#contact"
            className="button"
          >
            立即咨询
          </a>


        </header>


      </section>





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


                <img
                  src="/images/pic01.jpg"
                  alt="微信账号资源"
                  style={imgStyle}
                />


                <h3>
                  微信账号资源
                </h3>


                <p>
                  提供稳定可靠的微信账号资源服务。
                </p>


              </section>

            </div>





            <div className="col-4 col-12-medium">


              <section className="box">


                <img
                  src="/images/pic02.jpg"
                  alt="专业服务"
                  style={imgStyle}
                />


                <h3>
                  专业服务
                </h3>


                <p>
                  快速响应客户需求，提供便捷服务流程。
                </p>


              </section>


            </div>





            <div className="col-4 col-12-medium">


              <section className="box">


                <img
                  src="/images/pic03.jpg"
                  alt="售后支持"
                  style={imgStyle}
                />


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



          <div className="row">


            <div className="col-6 col-12-medium">


              <img
                src="/images/pic04.jpg"
                alt="关于我们"
                style={imgStyle}
              />


            </div>



            <div className="col-6 col-12-medium">


              <h3>
                专业微信账号服务平台
              </h3>


              <p>
                我们专注于微信账号服务领域，
                为用户提供稳定、高效的服务体验。
              </p>


              <p>
                关键词：
                {site.keywords}
              </p>


            </div>


          </div>


        </div>


      </section>





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
