import React, { Component } from 'react';
import './PowerAffirmations.css';

class PowerAffirmations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            words: ["I", "am", "a", "positive", "person", "[loading...]",
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
            <div>
                <h1>Empowering Affirmations</h1>
                <section className="wrapper">
                    <h2 className="sentence">Say to yourself:
                    <div className="fadeIn">
                        {words}
                    </div>
                    </h2>
                </section>
            </div>
        )
    }
}

export default PowerAffirmations;