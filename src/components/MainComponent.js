import React, { Component } from 'react';
import Races from './RacesComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        const HomePage = () => {
            return (
                <Home/>
            );
        };
        return (
            <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route path='/races' render={Races}/>
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}
export default Main;