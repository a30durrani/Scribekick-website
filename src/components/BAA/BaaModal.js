import React from "react";
import Footer from "components/Footer/Footer";
import IndexNavbar from "components/Navbars/IndexNavbar";

const BaaModal = () => {
    React.useEffect(() => {
        document.body.classList.toggle("baa");
        // Specify how to clean up after this effect:
        return function cleanup() {
          document.body.classList.toggle("baa");
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
                            <h1>Business Associate Agreement (BAA)</h1>
                            <p>This Business Associate Agreement ("Agreement") is entered into by and between ScribeKick, a Delaware C Corporation with its principal office located at 612 Morris Street, Albany, NY ("Business Associate") and the user of the ScribeKick EVA ("Covered Entity").</p>
                            <h3>1. Definitions</h3>
                            <p>(a) "PHI" shall mean Protected Health Information, as defined in HIPAA, limited to the information created, received, maintained, or transmitted by Business Associate on behalf of Covered Entity.</p>
                            <p>(b) "HIPAA" shall mean the Health Insurance Portability and Accountability Act of 1996, Public Law 104-191.</p>

                            <h3>2. Obligations of Business Associate</h3>
                            <p>(a) Business Associate agrees to use and disclose PHI solely for the purpose of performing its obligations under this Agreement and as permitted under HIPAA.</p>
                            <p>(b) Business Associate agrees to implement appropriate safeguards to prevent the unauthorized use or disclosure of PHI.</p>
                            <p>(c) Business Associate agrees to report any unauthorized use or disclosure of PHI to Covered Entity without undue delay.</p>

                            <h3>3. Permitted Uses and Disclosures</h3>
                            <p>(a) Business Associate may use or disclose PHI to perform functions, activities, or services specified in this Agreement.</p>
                            <p>(b) Business Associate may use PHI for its proper management, administration, and data aggregation services.</p>
                            <p>(c) Business Associate may disclose PHI for its proper management and administration or to fulfill any present or future legal responsibilities, provided disclosures are required by law.</p>

                            <h3>4. Prohibition on Unauthorized Use or Disclosure of PHI</h3>
                            <p>Business Associate shall not use or disclose PHI other than as permitted or required by this Agreement or as required by law.</p>

                            <h3>5. Ownership of PHI</h3>
                            <p>All PHI shall be and remain the property of Covered Entity. Nothing in this Agreement shall be construed as granting Business Associate any rights to or ownership of the PHI.</p>

                            <h3>6. Termination</h3>
                            <p>(a) Covered Entity may terminate this Agreement if it determines that Business Associate has violated a material term.</p>
                            <p>(b) Upon termination, Business Associate shall return or destroy all PHI received from Covered Entity.</p>

                            <h3>7. Miscellaneous</h3>
                            <p>(a) This Agreement supersedes all prior negotiations, discussions, and understandings between the parties regarding the matters described herein.</p>
                            <p>(b) This Agreement may be amended only in writing and signed by both parties.</p>    
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    <Footer/>
</>
);
};

export default BaaModal;
