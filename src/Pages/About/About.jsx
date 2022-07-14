import React, { useState } from "react";
import style from "./about.module.scss";
import { Button, Container, Form, Row } from "react-bootstrap";
import LayoutWrapper from "../../hoc/Layout";

function About() {
  const [items] = useState(["here", "to help you", "Do List"]);
  return (
    <div>
      <div></div>
      <section
        className="resume py-5 d-lg-flex justify-content-center align-items-center"
        id="resume"
      >
        <Container>
          <Row>
            <div className="col-lg-6 col-12">
              <div className="timeline">
                <div className="timeline-wrapper">
                  <div className="timeline-info">
                    <h2 className="mb-4">About Us</h2>
                    <p>
                      In the beginning, there was no DoList. No company. No
                      team. No bigger vision. There was just a computer science
                      student. So she built a little app to keep track of it all
                      which she imaginatively called DoList. The team grew. The
                      vision grew. We’re committed to building a company and
                      culture with a lasting impact on the world. We believe the
                      future of work transcends all kinds of borders. Ambition
                      without rest isn't sustainable. And working without
                      ambition breeds complacency. Our team is proof you can
                      have both. As DoList builds the future of work, many more
                      people across the globe will thrive, both professionally
                      and personally. We opt for solutions that will get us
                      where we want to be in the long-term. We don’t have an
                      exit strategy – we have a mission to help shape the future
                      of work for decades to come.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="about-image png">
                <img src="../img/bg2.png" className="img-fluid" alt="svg" />
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="contact py-5" id="contact">
        <Container>
          <Row>
            <div className="col-lg-5 mr-lg-5 col-12">
              <div className="google-map w-100">
                <div className="about-image png">
                  <img
                    src="../img/about1.png"
                    className="img-fluid"
                    alt="svg"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-12">
              <div className="contact-form">
                <h2 className="mb-4">Contact Us</h2>
                <Form>
                  <Row>
                    <div className="col-lg-6 col-12">
                      <Form.Control
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name"
                        id="name"
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <Form.Control
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        id="email"
                      />
                    </div>

                    <div className="col-12">
                      <textarea
                        name="message"
                        rows="6"
                        className="form-control"
                        id="message"
                        placeholder="Message"
                      ></textarea>
                    </div>

                    <div className="ml-lg-auto col-lg-5 col-12">
                      <Form.Control
                        type="submit"
                        className="btn form-control submit-btn"
                        value="Send Message"
                      />
                    </div>
                  </Row>
                </Form>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default LayoutWrapper(About);
