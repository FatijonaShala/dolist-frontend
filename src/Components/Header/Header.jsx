import React, { useState, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { ThemeContext, themes } from "../../context/ThemeContext";
import style from "./header.module.scss";

function Header(props) {
  const [items] = useState(["organize", "progress", "focus"]);

  //const [darkMode] = React.useState(true);
  const darkMode = useContext(ThemeContext);

  return (
    <section
      className="about full-screen d-lg-flex justify-content-center align-items-center"
      id="about"
    >
      <Container>
        <Row>
          <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
            <div className="about-text">
              <small className="small-text">
                To do lists{" "}
                <span className="mobile-block"> for busy people!</span>
              </small>
              <h1 className={`${style.animated}  animated-text`}>
                <span className="mr-2"> we help you to </span>
                <div className={style.animated_info}>
                  {items &&
                    items.map((elem) => (
                      <span className={style.animated_item}>{elem}</span>
                    ))}
                </div>
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
            <div className="about_image svg">
              <img src="../img/header.svg" className="img-fluid" alt="svg" />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Header;
