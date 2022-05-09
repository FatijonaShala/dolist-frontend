import React from 'react';
import styles from './about.module.scss';
import { Section, Button, Container, Row, } from 'react-bootstrap';

function About() {
    return ( 

      <div className={styles.content}>
        <Container>
          <Row className="justify-content-center">
            <div className="col-md-10">
              <Row className="justify-content-center">
                <div className="col-md-6">

                  <h3 className={`${styles.heading} mb-4 `}>Let's talk about everything!</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas debitis, fugit natus?</p>

                  <p><img src="images/undraw-contact.svg" alt="Image" className="img-fluid" /></p>


                </div>
                <div className="col-md-6">

                  <form className="mb-5" method="post" id="contactForm" name="contactForm">
                    <Row>
                      <div class={`col-md-12 ${styles.form_group}`}>
                        <input type="text" className={styles.form_control} name="name" id="name" placeholder="Your name" />
                      </div>
                    </Row>
                    <Row>
                      <div className={`col-md-12 ${styles.form_group}`}>
                        <input type="text" className={styles.form_control} name="email" id="email" placeholder="Email" />
                      </div>
                    </Row>
                    <Row>
                      <div className={`col-md-12 ${styles.form_group}`}>
                        <input type="text" className={styles.form_control} name="subject" id="subject" placeholder="Subject" />
                      </div>
                    </Row>
                    <Row>
                      <div className={`col-md-12 ${styles.form_group}`}>
                        <textarea className={styles.form_control} name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                      </div>
                    </Row>
                    <Row>
                      <div className="col-12">
                        <div className={styles.btn}>
                          <input type="submit" value="Send Message" className={`${styles.btn_primary} rounded-0 py-2 px-4 `} />
                          <span className="submitting"></span>
                        </div>
                      </div>
                    </Row>
                  </form>

                  <div id={` ${styles.form_message_warning} mt-4`} ></div>
                  <div id={styles.form_message_success}>
                    Your message was sent, thank you!
                  </div>
                </div>
              </Row>
            </div>
          </Row>
        </Container>

      </div>

    )
}

export default About;