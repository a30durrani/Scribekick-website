import React from 'react';
import IndexNavbar from 'components/Navbars/IndexNavbar';
import Footer from 'components/Footer/Footer';

const HowTo = () => {
    React.useEffect(() => {
        document.body.classList.toggle("HowTo");
        // Specify how to clean up after this effect:
        return function cleanup() {
          document.body.classList.toggle("HowTo");
        };
      }, []);
    return (
        <>
            <IndexNavbar />
                <div style={{marginTop:'100px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12"></div>
                                <blockquote className='blockquote'>
                                    <h3>Uploading Audio from Phone to Computer</h3>
                                    <p><strong>For iPhone (using AirDrop):</strong></p>
                                    <ol>
                                        <li>Open the Files app(or Voice Memos app) on your iPhone.</li>
                                        <li>Locate the audio file you want to share.</li>
                                        <li>Tap on the 'Share' icon.</li>
                                        <li>Select 'AirDrop' and then choose your computer from the list.</li>
                                        <li>Accept the file on your computer when prompted.</li>
                                    </ol>
                                    <p><strong>For Android (using Nearby Share):</strong></p>
                                    <ol>
                                        <li>Swipe down from the top of the screen to open Quick Settings.</li>
                                        <li>Tap on 'Nearby Share'.</li>
                                        <li>Locate the audio file you want to share and select it.</li>
                                        <li>Choose your computer from the list of available devices.</li>
                                        <li>Accept the file on your computer when prompted.</li>
                                    </ol>
                                    <p>Alternatively, for both iPhone and Android, cloud storage solutions like Google Drive, Dropbox, or iCloud can be used to upload the file on the phone and then download it on the computer.</p>
                                </blockquote>

                                <blockquote className='blockquote'>
                                    <h3>How to upload to EVA</h3>
                                    <ol>
                                        <li>Fill out First name, last name, and email.</li>
                                        <li>Check the box to consent to Terms and Conditions.</li>
                                        <li>Click Upload (note: you must click the word "upload" on the button, we're still working out the kinks with this functionality).</li>
                                        <li>Click Launch EVA (note: if your file explorer pops up again, do NOT upload another file. This is another bug we're addressing).</li>
                                        <li>Wait for EVA to finish processing.</li>
                                        <li>Your output will appear in the text boxes below the form.</li>
                                        <h4><span style={{ fontWeight: 'bold', textDecoration: 'underline'}}>Note: The AI-generated SOAP note and Insights should be used as SUGGESTIONS to help with notes and not a final end all be all copy</span></h4>
                                    </ol>
                                </blockquote>
                            </div>
                        </div>
                    </div>
            <Footer/>
        </>
    );
};

export default HowTo;
