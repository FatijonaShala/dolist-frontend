import React, {useState} from 'react';
import { Section, Button, Container, Row, } from 'react-bootstrap';
import style from './header.module.scss';

function Header() {
    const [items] = useState(['organize', 'progress', 'focus'])
    return (


        <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about" >
            <Container>
                <Row>
                    <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                        <div className={style.about_text}>
                            <small className={style.small_text}> To do lists
                                <span className={style.mobile_block}> for busy people! </span>
                            </small >
                            <h1 className={`${style.animated} ${style.animated_text}`}>
                                <span className="mr-2" > we help you to </span>
                                <div className={style.animated_info}>{items && items.map((elem) => <span className={style.animated_item}>{elem}</span>)}</div>
                            </h1>
                            <div className={`mt-4 ${style.custom_btn_group}`}>
                                <a href="login" className={`btn ${[style.costum_btn, style.costum_btn_bg, style.costum_btn_link]}`}>
                                    Create your to do list </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 col-12" >
                        <div className={`${style.about_image} svg`}>
                            <img src="../img/header.svg" className="img-fluid" alt="svg image" />
                        </div>
                    </div>

                </Row>
            </Container>
        </section>




    )
}

export default Header