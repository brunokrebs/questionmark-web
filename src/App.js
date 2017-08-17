import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import HomePage from "./HomePage/HomePage";
import About from "./About/About";
import Exam from "./Exam/Exam";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={HomePage} />
                <Route exact path="/exam" component={Exam} />
                <Route exact path="/about" component={About} />
            </div>
        );
    }
}

export default App;
