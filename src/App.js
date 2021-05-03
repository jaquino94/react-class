import React, { Fragment, Component } from 'react';
import Navbar from './components/Navbar';
import User from './components/users/User'
import './App.css';

class App extends Component {
    toUpper = (str) =>  str.toUpperCase();
    j       = "John";

    render() {
        if (this.j === "John") {
        return (
           <Fragment>
            <header className="App-header">
                <Navbar title="Hello there Navbar" />
                <User />
            </header>
            </Fragment>
        );
        } else {
            return (
               <Fragment>
                <header className="App-header">
                    <h1>Hello {this.toUpper(this.j)}</h1>
                    <h1>Goodbye There</h1>
                </header>
                </Fragment>
            );
        }
    }
}

export default App;
