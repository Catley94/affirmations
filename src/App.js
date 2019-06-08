import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header/Header';
import About from './About/About';
import PowerAffirmations from './Affirmations/Conscious/PowerAffirmations/PowerAffirmations';
import AllAffirmations from './Affirmations/AllAffirmations';
import Conscious from './Affirmations/Conscious/Conscious';
import Subconscious from './Affirmations/Subconscious/Subconscious';

class App extends Component {
  
  render() {
    
    
    return (
      <div className="App">
        <Router>
        <Header />
          <header className="AppContainer">            
            <Route exact path="/" component={AllAffirmations} />
            <Route exact path="/Conscious" component={Conscious} />
            <Route exact path="/Subconscious" component={Subconscious} />
            <Route exact path="/PowerAffirmations" component={PowerAffirmations} />
            <Route path="/about" component={About} />
          </header>
        </Router>
      </div>
    );
  }
}

export default App;
