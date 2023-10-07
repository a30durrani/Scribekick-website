import React from 'react';

// Components
import IndexNavbar from 'components/Navbars/IndexNavbar';
import UserForm from 'components/BAA/UserForm';
import Footer from 'components/Footer/Footer';
import { Container } from 'reactstrap';

function App() {
    return (
        <div className="App">
            <IndexNavbar style={{marginBottom:'100px'}}/>
            <Container className="App-content mt-5">                     
                <section className="App-section">
                    <UserForm />
                </section>
            </Container>

            <Footer />
        </div>
    );
}

export default App;

