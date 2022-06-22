import React, { useState } from "react";
import s from "./analytics.module.scss";
import LayoutWrapper from "../../hoc/Layout";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  Container,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

import Widget from "./components/Widget.jsx";
import ApexActivityChart from "./components/ActivityChart.jsx";

import heartRed from "./components/images/heartRed.svg";
import heartTeal from "./components/images/heartTeal.svg";
import heartViolet from "./components/images/heartViolet.svg";
import heartYellow from "./components/images/heartYellow.svg";

import statsPie from "./components/images/statsPie.svg";

function Analytics() {
  return (
    <div>
      <Container className="resume py-5">
        <Row>
          <Col className=" mp-grid-col" xs={12} lg={8}>
            <Row className="gutter mb-4">
              <Col className="mb-4 mb-md-0" xs={12} md={6}>
                <Widget className="">
                  <div className="d-flex justify-content-between widget-p-md">
                    <p className="headline-3 d-flex align-items-center ">
                      Your activity
                    </p>
                    <UncontrolledDropdown>
                      <DropdownToggle caret>
                        &nbsp; Weekly &nbsp;
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Daily</DropdownItem>
                        <DropdownItem>Weekly</DropdownItem>
                        <DropdownItem>Monthly</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                  <ApexActivityChart className="pb-4" />
                </Widget>
              </Col>

              <Col xs={12} md={6} className="mb-4">
                <Widget className="widget-p-none">
                  <p className="headline-3 d-flex align-items-center ">
                    Upgrade your plan
                  </p>
                  <div className="d-flex flex-wrap align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center col-12 col-xl-6 p-sm-4">
                      <p className="body-3">Track your progress with Dolist</p>
                      <div className="d-flex justify-content-between my-4">
                        <Button className="rounded-pill mr-1" color="primary">
                          Go Premium
                        </Button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-center col-12 col-xl-6">
                      <img
                        className="p-1 img-fluid"
                        src="../img/progress.jpg"
                        alt="..."
                      />
                    </div>
                  </div>
                </Widget>
              </Col>
            </Row>

            <Row className="gutter">
              <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
                <Widget className="widget-p-sm">
                  <div className={s.smallWidget}>
                    <div className="d-flex mb-4">
                      <img
                        className="py-1 mr-2 img-fluid"
                        src={heartRed}
                        alt="..."
                      />
                      <div className="d-flex flex-column">
                        <p className="headline-3">Collection 1</p>
                        <p className="body-2">
                          Num<span className="body-3 muted">/ ber</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <Progress
                        color="secondary-red"
                        className={`progress-xs ${s.mutedPink}`}
                        value="75"
                      />
                    </div>
                  </div>
                </Widget>
              </Col>
              <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
                <Widget className="widget-p-sm">
                  <div className={s.smallWidget}>
                    <div className="d-flex mb-4">
                      <img
                        className="py-1 mr-2 img-fluid"
                        src={heartYellow}
                        alt="..."
                      />
                      <div className="d-flex flex-column">
                        <p className="headline-3">Collection 2</p>
                        <p className="body-2">
                          Num<span className="body-3 muted">/ ber</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <Progress
                        color="secondary-yellow"
                        className={`progress-xs ${s.mutedYellow}`}
                        value="75"
                      />
                    </div>
                  </div>
                </Widget>
              </Col>
              <Col xs={6} sm={6} xl={3}>
                <Widget className="widget-p-sm">
                  <div className={s.smallWidget}>
                    <div className="d-flex mb-4">
                      <img
                        className="py-1 mr-2 img-fluid"
                        src={heartTeal}
                        alt="..."
                      />
                      <div className="d-flex flex-column">
                        <p className="headline-3">Collection 3</p>
                        <p className="body-2">
                          Num<span className="body-3 muted">/ ber</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <Progress
                        color="secondary-cyan"
                        className={`progress-xs ${s.mutedTeal}`}
                        value="75"
                      />
                    </div>
                  </div>
                </Widget>
              </Col>
              <Col xs={6} sm={6} xl={3}>
                <Widget className="widget-p-sm">
                  <div className={s.smallWidget}>
                    <div className="d-flex mb-4">
                      <img
                        className="py-1 mr-2 img-fluid"
                        src={heartViolet}
                        alt="..."
                      />
                      <div className="d-flex flex-column">
                        <p className="headline-3">Collection 4</p>
                        <p className="body-2">
                          Num<span className="body-3 muted">/ ber</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <Progress
                        color="violet"
                        className={`progress-xs ${s.mutedViolet}`}
                        value="75"
                      />
                    </div>
                  </div>
                </Widget>
              </Col>
            </Row>
          </Col>
          <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={4}>
            <Widget className="widget-p-lg">
              <div className={s.goals}>
                <div className={s.goalsTitle}>
                  <p className="headline-3">Your Goals</p>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>&nbsp; Weekly &nbsp;</DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Daily</DropdownItem>
                      <DropdownItem>Weekly</DropdownItem>
                      <DropdownItem>Monthly</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <div className="d-flex flex-column mt-3">
                  <div className={s.activity}>
                    <p className="body-2">Study</p>
                    <p className="body-2">
                      92<span className="body-3 muted"> / 160</span>
                    </p>
                  </div>
                  <Progress
                    color="secondary-red"
                    className="progress-xs"
                    value={60}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <div className={s.activity}>
                    <p className="body-2">Work</p>
                    <p className="body-2">
                      40<span className="body-3 muted"> / 50</span>
                    </p>
                  </div>
                  <Progress
                    color="secondary-yellow"
                    className="progress-xs"
                    value={80}
                  />
                </div>
                <div className="d-flex flex-column mt-3">
                  <div className={s.activity}>
                    <p className="body-2">Sleep</p>
                    <p className="body-2">
                      25<span className="body-3 muted"> / 40</span>
                    </p>
                  </div>
                  <Progress
                    color="secondary-cyan"
                    className="progress-xs"
                    value={40}
                  />
                </div>
              </div>

              <a
                className={`btn-secondary-red ${s.statsBtn}`}
                href="#top"
                role="button"
              >
                <img className={s.pieImg} src={statsPie} alt="..." />
                <div>
                  <p className="headline-2">STATISTIC</p>
                  <p className="body-3">Download your activity</p>
                </div>
              </a>
            </Widget>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LayoutWrapper(Analytics);
