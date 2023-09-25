import React from "react";
import Footer from "components/Footer/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Container, Row, Button, Col } from "reactstrap";

const PrivacyPolicy = () => {
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
            <h1>Privacy Policy</h1>
            <p><strong>Last updated:</strong> September 21st, 2023</p>
            
            <h2>Introduction</h2>
            <p>Welcome to ScribeKick! Your privacy is of the utmost importance to us. This Privacy Policy is designed to inform you about our practices regarding the collection, use, and disclosure of information that you may provide or that we may collect during your interaction with our services.</p>

            <h2>What Information We Collect</h2>
            <p>We collect various types of data in order to provide and improve our Services, including but not limited to:</p>
            <ul>
              <li>Personal Data</li>
              <li>Audio, Visual, and Text Data</li>
              <li>Health Information</li>
              <li>Usage Data</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use your data for various purposes, such as:</p>
            <ul>
              <li>To provide and maintain our Services.</li>
              <li>To improve, personalize, and expand our Services.</li>
              <li>To communicate with you, including for customer service and support.</li>
              <li>To fulfill any legal obligations we have.</li>
            </ul>

            <h2>Storage and Security</h2>
            <p>The security of your data is extremely important to us. We implement best practices, including encryption, firewalls, and secure server environments, to protect your data.</p>

            <h2>Sharing Your Data</h2>
            <p>We will not sell your data to third parties. We may share your data with third-party service providers for the purpose of improving our Services, provided that these parties agree to keep this information confidential and adhere to the same standards of data protection as we do.</p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the data we hold about you.</li>
              <li>Correct any inaccurate or incomplete data we hold about you.</li>
              <li>Withdraw your consent at any time, where we rely on your consent to use your data.</li>
            </ul>

            <h2>Legal Basis for Processing</h2>
            <p>We will process your information only:</p>
            <ul>
              <li>When we have your explicit consent.</li>
              <li>When we have legitimate interests in processing.</li>
              <li>As necessary to comply with our legal obligations.</li>
            </ul>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by updating the new Privacy Policy on this page and, where feasible, through email notification.</p>

            <h2>Contact Us</h2>
            <p>For any questions about this Privacy Policy or your data, please contact us through<a href="https://forms.gle/UuCRk6xRXMedVURq9" class="link-light"> This Form</a>.</p>

            <p>By using our Services, you agree to the collection and use of information in accordance with this Privacy Policy.</p>
          </blockquote>
        </div>
      </div>
    </div>
        </div>
        <Footer/>
    </>
    );
};

export default PrivacyPolicy;
  // Uncomment the below line if you are using this component in a React app.
  // export default PrivacyPolicy;
  