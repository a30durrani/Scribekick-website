/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// // core components
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
// import Footer from "components/Footer/Footer.js";
// import PageHeader from "components/PageHeader/PageHeader.js";

// import bigChartData from "variables/charts.js";

export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);
  return (
      <div className="wrapper">
        <div>
          <div className="content-center">
          <Container class="mb-10">
            <Row className="row-grid justify-content-between text-center">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h1 className="text-center">
                    <span style={{ fontWeight: 'bold', textDecoration: 'underline'}}>
                    Meet EVA.
                    </span>
                    </h1>
                  <blockquote class="blockquote mb-5">
                    <p class="mb-0">
                      We're proud to introduce EVA, our first generation tool
                      that sets the groundwork for the future of documentation.
                      Using cutting edge machine learning models, EVA is able 
                      to fully transcribe audio files from speech therapy sessions
                      and output the transcript right to a PDF along with a series of AI-powered 
                      insights. Simply record your session, upload it to EVA, and she handles the rest. 
                    </p>
                    <p class="mb-0"></p>
                    <p></p>
                    <p class="mb-0">
                      Yup, it's that simple. Thanks EVA.
                    </p>
                    <p></p>
                    <div className="btn-wrapper mb-3">
                    <Button
                      type="button"
                      class="btn btn-outline-success"
                      href="/register-page"
                      size="md"
                      >
                      <p className="text-success d-inline">
                      Let's Meet EVA
                      </p>
                      <i className="tim-icons icon-minimal-right btn-outline-success" />
                    </Button>
                    </div>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-lock-circle" />
                          </div>
                          <div className="ml-3">
                            <h6>Backend PHI Encryption</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-spaceship" />
                          </div>
                          <div className="ml-3">
                            <h6>Fast Outputs(under 5 minutes)</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-atom" />
                          </div>
                          <div className="ml-3">
                            <h6>AI-powered Insights to help with your SOAP notes</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </blockquote>
                  </div>
            </Row>
          </Container>
          </div>
        </div>
        <section className="section section-lg">
          <div className="content-center">
            <Container>
              <Row className="justify-content-center">
                <Col lg="11">
                  <h1 className="text-center">
                    <span style={{textDecoration: 'underline'}}>
                    Our Mission.
                    </span>
                    </h1>
                  <blockquote class="blockquote mb-5">
                    <Row className="row-grid justify-content-center">
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-primary">
                            <i className="tim-icons icon-notes" />
                          </div>
                          <h4 className="info-title">Automated Workflow</h4>
                          <hr className="line-primary" />
                          <p>
                          By harnessing the power of machine learning, we aim 
                          to automate the time-consuming documentation tasks for SLPs. 
                          Dive into a future where paperwork takes a backseat.
                          </p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-warning">
                            <i className="tim-icons icon-satisfied" />
                          </div>
                          <h4 className="info-title">Better Outcomes</h4>
                          <hr className="line-warning" />
                          <p>
                          By redirecting focus from paperwork to hands-on care, 
                          we're paving the way for enriched patient interactions 
                          and more impactful therapy sessions. 
                          </p>
                        </div>
                      </Col>
                      <Col lg="3">
                        <div className="info">
                          <div className="icon icon-success">
                            <i className="tim-icons icon-world" />
                          </div>
                          <h4 className="info-title">More Life</h4>
                          <hr className="line-success" />
                          <p>
                          No more late nights buried in paperwork. With our solution, 
                          SLPs can breathe easier and enjoy more of life outside the clinic. 
                          Rediscover the joy of your profession and the balance of life with us.
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </blockquote>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section>
        <div className="content-center text-center">
            <Row className="row-grid justify-content-between align-items-center">
            <Col>
                <h1 className="text-white">
                  Less Writing. <br />
                  <span className="text-white">More Living.</span>
                </h1>
                <div className="btn-wrapper mb-3">
                  <p className="category text-success d-inline">
                    Get started today
                  </p>
                  <Button
                    className="btn-link"
                    color="success"
                    href="/register-page"
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
              </Col>
            </Row>
            <Row className="row-grid justify-content-between align-items-center">
            <Col>
                <img
                  alt="..."
                  className="img-fluid"
                  src={require("assets/img/black-logo.png")}
               />
              </Col>
            </Row>
          </div>
        </section>
      </div>
  );
}
