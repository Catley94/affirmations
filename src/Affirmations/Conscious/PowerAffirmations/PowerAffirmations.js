import React, { Component } from 'react';
import './PowerAffirmations.css';

class PowerAffirmations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            affirmations: [
                "I am a positive person",
                "",
                "I have many unique skills",
                "",
                "I will use these skills effectively"

        ],
            words: ["I", "am", "a", "positive", "person", "",
                    "I", "have", "many", "unique", "skills", "",
                    "I", "will", "use", "these", "skills", "effectively", "",
                    "I", "look", "at", "all", "situations", "in", "a", "positive", "light", ""
                ]
          }
    }
    
    render() {
        // const style = {
        //     backgroundColor: green,
        //     animationName: "test",
        //     @keyframes test {
        //         50% {
        //             backgroundColor: blue
        //         }
        //         100% {
        //             backgroundColor: yellow
        //         }
        //     }
        // }
        const words = this.state.words.map((word, i) => {
            console.log(word)
            return <span key={i}>{word}</span>;
           });

        // console.log(this.state.affirmations[0].affirmation.split(" "))
        //    const words = this.state.affirmations.map((affirmation, i) => {
        //     const stringWithNoSpaces = affirmation.split(" ");
        //     // console.log("stringWithNoSpaces: ", stringWithNoSpaces, "type of: ", stringWithNoSpaces.typeOf)
        //     stringWithNoSpaces.map((word, i) => {
        //         console.log("for each word: ", word)
        //         return <span key={i}>{word}</span>;
        //     })
            
        //    });
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