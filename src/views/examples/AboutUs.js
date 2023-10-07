import React from "react";
import Footer from "components/Footer/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Container, Row, Button, Col } from "reactstrap";

export default function AboutUs() {
    React.useEffect(() => {
        document.body.classList.toggle("about-us");
        // Specify how to clean up after this effect:
        return function cleanup() {
          document.body.classList.toggle("about-us");
        };
      }, []);
  return (
    <>
    <IndexNavbar class="mb-0" />
    <div className="wrapper" style={{marginTop:'50px'}}>
        <div>
          <div className="content-center">
          <Container class="mb-10">
            <Row className="row-grid justify-content-between text-center">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h1 className="text-center">
                    <span style={{ fontWeight: 'bold', textDecoration: 'underline'}}>
                    What is ScribeKick?
                    </span>
                    </h1>
                  <blockquote class="blockquote mb-5">
                    <p class="mb-2">
                      At ScribeKick, we're committed to creating a future
                      where tedious documentation is a thing of the past.
                      We believe that your work should embody the good you do
                      for the world, not all the adminstrative burdens inbetween. Furthermore,
                      we believe everyone deserves a life outside of work. No more sleepless nights 
                      grinding paperwork, no more sweating to make deadlines, no more burnout. More 
                      focusing on patient care, more experiencing the joy of life, more spending time 
                      with your loved ones. Technology has the power to change the world, and we want to leverage it to
                      change yours. 
                    </p>
                    <p></p>
                    <p>
                      We are currently compiling a dataset of speech therapy sessions
                      to aid our efforts in creating an AI-powered software that fully 
                      automates all documentation tasks for SLPs. That includes SOAP notes,
                      Progress Reports, Evaluation Reports, Session Plans; all of it.
                      However, to do this we need the help of SLPs around the country to 
                      aid our data collection efforts. If you or someone you know is interested
                      in helping us build the future, please contact us through  
                      <a href="https://forms.gle/UuCRk6xRXMedVURq9" class="link-light"> This Link</a>.
                    </p>
                  </blockquote>
                  </div>
            </Row>
          </Container>
          </div>
        </div>
        <div>
          <div className="content-center">
          <Container class="mb-10">
            <Row className="row-grid justify-content-between text-center">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h1 className="text-center">
                    <span style={{ fontWeight: 'bold', textDecoration: 'underline'}}>
                    Is my data safe? How do you handle PHI?
                    </span>
                    </h1>
                  <blockquote class="blockquote mb-5">
                    <p class="mb-0">
                      With EVA, we use an industry grade encryption protocol from 
                      <a href="https://capeprivacy.com/" class="link-light"> Cape Privacy </a>
                      to encypt any PHI that is included in a speech therapy session. After encryption,
                      the de-identified transcript is put through an industry-grade Large Language Model 
                      to draw insights from your session. In the future, our native second generation model 
                      will include an in-house encryption protocol to continue to keep your data safe and add
                      another layer of privacy for our users. Furthermore, we promise to never sell your data to
                      third parties; all data we collect and store will strictly be used for improving our systems.
                    </p>
                  </blockquote>
                  </div>
            </Row>
          </Container>
          </div>
        </div>
        <div>
          <div className="content-center">
          <Container class="mb-10">
            <Row className="row-grid justify-content-between text-center">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h1 className="text-center">
                    <span style={{ fontWeight: 'bold', textDecoration: 'underline'}}>
                    How long until your mission is a reality?
                    </span>
                    </h1>
                  <blockquote class="blockquote mb-5">
                    <p class="mb-0">
                      It's tough to tell as of right now, but we're aiming to have a 
                      usable product within the next two years. We're currently working 
                      very hard to compile a data set for our machine learning models, and 
                      we need your help. 
                    </p>
                    <p class= "mb-0">
                        If you or someone you know is interested
                        in helping us build the future, please contact us through  
                        <a href="https://forms.gle/UuCRk6xRXMedVURq9" class="link-light"> This Link</a>.
                    </p>
                  </blockquote>
                  </div>
            </Row>
          </Container>
          </div>
        </div>
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
                    href="/EVA"
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </section>
       </div>
      <Footer/>
    </>
  );
}
