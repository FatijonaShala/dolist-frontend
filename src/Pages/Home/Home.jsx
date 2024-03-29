import React, { useState } from "react";
import style from "./home.module.scss";
import LayoutWrapper from "../../hoc/Layout";
import { Container, Row } from "react-bootstrap";

function Home() {
  const [items] = useState(["organize", "progress", "focus"]);

  return (
    <div>
      <section
        className="about  full-screen d-lg-flex justify-content-center align-items-center"
        id="about"
      >
        <Container>
          <Row>
            <div className=" col-lg-7 col-md-12 col-12 d-flex  align-items-center">
              <div className="about-text">
                <small className="small-text">
                  To do lists{" "}
                  <span className="mobile-block"> for busy people!</span>
                </small>
                <h1 className="animated animated-text">
                  <span className="mr-2"> we help you to </span>
                  <span className="animated-info">
                    {items.map((elem, i) => (
                      <span className="animated-item" key={i}>
                        {elem}
                      </span>
                    ))}
                  </span>
                </h1>

                <div className={`  ${style.custom_btn_group} && mt-4`}>
                  <a
                    href="login"
                    className={`btn 
                    
                         ${style.custom_btn}
                     ${style.custom_btn_bg}  ${style.custom_btn_link}`}
                  >
                    Create your list
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 col-12">
              <div className="about-image svg">
                <img src="../img/header.svg" className="img-fluid" alt="svg" />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default LayoutWrapper(Home);
