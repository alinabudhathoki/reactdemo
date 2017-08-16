import React, {Component} from 'react';
import {render} from 'react-dom';
import { Home } from "./Components/Home";
import { Header } from "./Components/Header";

class App extends Component {
    render() {
        var user = {
            name : 'Aleena',
            hobbies : ['sports', 'reading']
        };
        return (
            <div>
                <div>
                    <Home name = {'alina'} age = {22} user = {user}>
                        <p>Passed to component</p>
                    </Home>
                </div>
                <div>
                    <Header/>
                </div>
            </div>
        );
    }
}
render(
    <App/>,
    document.getElementById('app'));