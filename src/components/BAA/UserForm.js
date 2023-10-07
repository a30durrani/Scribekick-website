import React, { useState } from 'react';
import axios from 'axios';
import { FormGroup, Label, Input, Button, Form, Row, Alert, Container } from 'reactstrap';  // Importing Reactstrap components for styling

function UserForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [audioFile, setAudioFile] = useState(null);
    const [isChecked, setIsChecked] = useState(false);  // Checkbox state
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [transcription, setTranscription] = useState("");
    const [insights, setInsights] = useState("");

    const allowedAudioTypes = ["audio/wav", "audio/mp3", "audio/mpeg", "audio/m4a"];

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!isChecked) {  // Check if the box is checked
            setErrorMessage("Please agree to the terms by checking the box.");
            return;
        }

        if (!audioFile || !allowedAudioTypes.includes(audioFile.type)) {
            setErrorMessage("Please upload a valid audio file.");
            return;
        }

        const formData = new FormData();
        formData.append("firstName", firstName);
        formData.append("lastName", lastName);
        formData.append("email", email);
        formData.append("audioFile", audioFile);

        setIsLoading(true);
        setErrorMessage("");

        try {
            // Assuming backend endpoint is /audio/upload
            const response = await axios.post('https://eva-backend-production.up.railway.app/audio/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
        
            // Extracting the file paths from the server's response
            const { transcription, insights } = response.data;

            setTranscription(transcription);
            setInsights(insights);
        
            setIsLoading(false);
        
            // Optionally, you can reset the form if needed
            setFirstName("");
            setLastName("");
            setEmail("");
            setAudioFile(null);
            setIsChecked(false);
        } catch (error) {
            setIsLoading(false);
            setErrorMessage("Error uploading audio. Please try again.");
        }
        
    };

    return (
        <div className="content-center">
            <Container className="mb-5">
                <Row className="row-grid justify-content-center">
                    <h1>Upload Audio for Transcription</h1>

                    {errorMessage && <Alert color="danger">{errorMessage}</Alert>}  

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="firstName">First Name:</Label>
                            <Input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">Last Name:</Label>
                            <Input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email:</Label>
                            <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
                                <span className="form-check-sign" />
                                By checking this box, you agree to use EVA as intended in accordance with our <a href="/ToS" class="link-light"> Terms of Service</a> and <a href="/privacy-policy" class="link-light"> Privacy Policy</a>
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit" disabled={isLoading} color="primary" className='button'>
                                <Label for="audioFile">
                                        {isLoading ? "Uploading..." : (audioFile ? `Launch EVA` : "Upload")}
                                </Label>
                            </Button>
                            <Input 
                                type="file" 
                                id="audioFile" 
                                accept=".wav, .mp3, .mp4, .m4a, .mpeg" 
                                onChange={(e) => setAudioFile(e.target.files[0])} 
                                required 
                                disabled={!isChecked} 
                                style={{ display: 'none' }}  // This hides the default file input
                            />
                            {audioFile && <div>Selected file: {audioFile.name}</div>}  
                        </FormGroup>
                    </Form>
                </Row>
            </Container>  
                <Row>
                    <blockquote style={{ whiteSpace: 'pre-line' }} className='blockquote'>
                        <h1>Transcript:</h1>
                        <p>{transcription}</p>
                    </blockquote>
                    <blockquote style={{ whiteSpace: 'pre-line' }} className='blockquote'>
                        <h1>AI-powered SOAP Note and Insights:</h1>
                        <p>{insights}</p>
                    </blockquote>
                </Row>

        </div>   
    );
}

export default UserForm;
