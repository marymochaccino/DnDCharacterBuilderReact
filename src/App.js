import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Home from './components/HomeComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">NuCamp</NavbarBrand>
                </div>
                </Navbar>
                </Home>
        );
    }
}

export default App;