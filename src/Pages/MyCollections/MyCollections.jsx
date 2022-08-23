import React from "react";
import s from "./myCollections.module.scss";
import LayoutWrapper from "../../hoc/Layout";
import { section, Placeholder, Row, Col, Container } from "react-bootstrap";

function MyCollections() {
  return (
    <main>
      <Container className="py-2 text-center container">
        <Row className="py-lg-2">
          <Col className="col-lg-6 col-md-8 mx-auto">
            <h3 className="mb-3">My Collections</h3>
            <a
              href="/newList"
              type="submit"
              className=" btn custom-btn custom-btn-bg custom-btn-link"
              value="New List"
            >
              New List
            </a>
          </Col>
        </Row>
      </Container>

      <div className="album py-5 ">
        <Container>
          <Row className=" row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <Col>
              <div className="card shadow-sm">
                <Placeholder
                  width="100%"
                  height="225"
                  className="card-img-top"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h4 className=" mb-5  text-center">Collection 1</h4>
                  <p className="card-text">Content</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card shadow-sm">
                <Placeholder
                  width="100%"
                  height="225"
                  className="card-img-top"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h4 className="mb-5 text-center">Collection 2</h4>
                  <p className="card-text">Content</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card shadow-sm">
                <Placeholder
                  width="100%"
                  height="225"
                  className="card-img-top"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h4 className="mb-5 text-center">Collection 3</h4>
                  <p className="card-text">Content</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>

            <Col>
              <div className="card shadow-sm">
                <Placeholder
                  width="100%"
                  height="225"
                  className="card-img-top"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h4 className="mb-5 text-center">Collection 4</h4>
                  <p className="card-text">Content</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card shadow-sm">
                <Placeholder
                  width="100%"
                  height="225"
                  className="card-img-top"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h4 className="mb-5 text-center">Collection 5</h4>
                  <p className="card-text">Content</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card shadow-sm">
                <Placeholder
                  width="100%"
                  height="225"
                  className="card-img-top"
                  text="Thumbnail"
                />
                <div className="card-body">
                  <h4 className="mb-5 text-center">Collection 6</h4>
                  <p className="card-text">Content</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </main>
  );
}

export default LayoutWrapper(MyCollections);
