import React, { Component } from 'react';
import logo from './logo.svg';
import './CSS/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ["I", "can", "do", "this", "[loading...]",
              "I", "have", "many", "unique", "skills", "[loading...]",
              "I", "will", "use", "these", "skills", "effectively", "[loading...]",
              "I", "look", "at", "all", "situations", "in", "a", "positive", "light", "[loading...]"]
    }
  }
  
  render() {
    const words = this.state.words.map((word) => {
      return <span key={word}>{word}</span>;
     });
    
    return (
      <div className="App">
        <header className="App-header">
        <h1>Empowering Affirmations</h1>
          <section className="wrapper">
            <h2 className="sentence">Say to yourself:
              <div className="fadeIn">
                {words}

              </div>
            </h2>
          </section>
        </header>
      </div>
    );
  }
}

export default App;
