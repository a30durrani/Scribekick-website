import React from 'react';

// Components
import IndexNavbar from 'components/Navbars/IndexNavbar';
//import UserForm from 'components/BAA/UserForm';
import Footer from 'components/Footer/Footer';
import { Container } from 'reactstrap';

function App() {
    return (
        <div className="App">
            <IndexNavbar style={{marginBottom:'100px'}}/>
            <Container className="App-content mt-5">                     
            <div style={{marginTop:'100px'}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12"></div>
                                <blockquote className='blockquote'>
                                <h3>Working on EMR Demo and raising money! Check back soon!</h3>
                                <h3>Email ahmed@scribekick.me with any questions!</h3>
                               </blockquote>
                            </div>
                        </div>
                    </div>
            </Container>

            <Footer />
        </div>
    );
}

export default App;

