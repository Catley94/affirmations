import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["awesome", "cool", "fantastic", "incredible"]
    }
  }
  
  render() {
    
    
    return (
      <div className="App">
        <header className="App-header">
        <h1>Empowering Affirmations</h1>
          <section className="wrapper">
            <h2 className="sentence">Say to yourself:
              <div className="fadeIn">
                <span>I</span>
                <span>can</span>
                <span>do</span>
                <span>this!</span>
                <span></span>
                <span>I</span>
                <span>have</span>
                <span>many</span>
                <span>unique</span>
                <span>skills</span>
                <span></span>
                <span>I</span>
                <span>will</span>
                <span>use</span>
                <span>these</span>
                <span>skills</span>
                <span>effectively</span>
                <span></span>
                <span>I</span>
                <span>look</span>
                <span>at</span>
                <span>all</span>
                <span>situations</span>
                <span>in</span>
                <span>a</span>
                <span>positive</span>
                <span>light</span>
                <span></span>

              </div>
            </h2>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
