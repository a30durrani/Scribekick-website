import React from "react";
import Footer from "components/Footer/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";

const ErrorPage = () => {
    React.useEffect(() => {
        document.body.classList.toggle("privacy-policy");
        // Specify how to clean up after this effect:
        return function cleanup() {
          document.body.classList.toggle("privacy-policy");
        };
      }, []);
      return (
        <>
        <IndexNavbar class="mb-0" />
        <div style={{marginTop:'100px'}}>
        <div className="container">
      <div className="row">
        <div className="col-12">
          <blockquote className="blockquote">
            <h1>EVA has been deprecated.</h1>
            <p><strong>We are currently working on an AI-powered EMR built around EVA. Contact us to learn more!</strong></p>
          </blockquote>
        </div>
      </div>
    </div>
        </div>
        <Footer/>
    </>
    );
};

export default ErrorPage;