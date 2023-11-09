import React, { Component } from 'react';
import Header from './header.js';
import Footer from './footer.js';
import './App.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <br></br>
                <br></br>
                <Footer />
            </div>
        );
    }
}

export default Main;