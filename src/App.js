import React from 'react';
import './App.css';
import JSCard from "./Components/JSCard";
import HTMLCard from "./Components/HTMLCard";
import { rot13 } from "./functions/rot13";
import { convert } from "./functions/roman-numeral";
import { palindrome } from "./functions/palindrome";
import { translatePigLatin } from "./functions/pig-latin";





class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reactcards: [
        {
          url: "https://github.com/cmcnealy/portfolio",
          src: "./images/programmer/programportfolio-thumb.png",
          alt: "Thumbnail",
          cardtitle: "This Portfolio's Source",
          languages: "React"
        },
          {
          url: "https://codepen.io/courtneymcnealy/full/xxVwKNp",
          src: "./images/programmer/pomodoro-thumb.png",
          alt: "Thumbnail",
          cardtitle: 'Pomodoro Clock',
          languages: 'React'
        },
        {
          url: 'https://codepen.io/courtneymcnealy/full/PoNoPZW',
          src: './images/programmer/calc-thumb.png',
          alt: "Thumbnail",
          cardtitle: 'JavaScript Calculator',
          languages: 'React'
        },
        {
          url: 'https://codepen.io/courtneymcnealy/full/GRZZbPz',
          src: './images/programmer/steeldrum-thumb.png',
          alt: "Thumbnail",
          cardtitle: 'Drum Machine',
          languages: 'React'
        },
        {
          url: 'https://codepen.io/courtneymcnealy/full/PoZvyXR',
          src: './images/programmer/quote-thumb.png',
          alt: "Thumbnail",
          cardtitle: 'Random Quote Generator',
          languages: 'React'
        }
      ],
      jscards: [
        {
          title: "Caesar Cipher (ROT13) Encoder and Decoder",
          formID: "rot13-form",
          named: "code",
          function: rot13,
          resultID: "rot13-result",
          cardtitle: "Caesar Cipher Converter",
          languages: "JavaScript"
        },
        {
          title: "Roman Numeral Converter (to and from, up to 9999)",
          formID: "roman-numeral-form",
          named: "numeral",
          function: convert,
          resultID: "roman-numeral-result",
          cardtitle: "Roman Numeral Converter",
          languages: "JavaScript"
        },
        {
          title: "Palindrome Checker",
          formID: "palindrome-form",
          named: "palindrome",
          function: palindrome,
          resultID: "palindrome-result",
          cardtitle: "Palindrome Checker",
          languages: "JavaScript"
        },
        {
          title: "Convert Any Phrase To Pig Latin",
          formID: "pig-latin-form",
          named: "pig-word",
          function: translatePigLatin,
          resultID: "pig-latin-result",
          cardtitle: "Pig Latin Generator",
          languages: "JavaScript"
        }
      ],
      htmlcards: [
        {
          url: "https://codepen.io/courtneymcnealy/full/vYLpyJv",
          src: "./images/programmer/artistportfolio-thumb.png",
          alt: "Thumbnail",
          cardtitle: 'Artist Portfolio',
          languages: 'Bootstrap'
        },
        {
          url: 'https://codepen.io/courtneymcnealy/full/BaoqXgx',
          src: './images/programmer/techdoc-thumb.png',
          alt: "Thumbnail",
          cardtitle: 'Technical Document',
          languages: 'HTML and CSS'
        },
        {
          url: 'https://codepen.io/courtneymcnealy/full/KKdBjre',
          src: './images/programmer/productpage-thumb.png',
          alt: "Thumbnail",
          cardtitle: 'Product Landing Page',
          languages: 'HTML and CSS'
        },
        {
          url: 'https://codepen.io/courtneymcnealy/full/LYpBpKZ',
          src: './images/programmer/surveyform-thumb.png',
          alt: "Thumbnail",
          cardtitle: 'Survey Form',
          languages: 'HTML and CSS'
        },
        {
          url: 'https://codepen.io/courtneymcnealy/full/MWaGzER',
          src: './images/programmer/tributepage-thumb.png',
          alt: "Thumbnail",
          cardtitle: 'Tribute Page',
          languages: 'HTML and CSS'
        }
      ]
    }
  }

  render() {
    return (
        <div className="row justify-content-center">
          {this.state.reactcards.map((card,i) =>
              <HTMLCard
                  key={i}
                  url={card.url}
                  src={card.src}
                  alt={card.alt}
                  cardtitle={card.cardtitle}
                  languages={card.languages}
              />
          )}
          {this.state.jscards.map((card,i) =>
              <JSCard
                  key={i}
                  title={card.title}
                  formID={card.formID}
                  named = {card.named}
                  function={card.function}
                  resultID={card.resultID}
                  cardtitle={card.cardtitle}
                  languages={card.languages}
              />
          )}
          {this.state.htmlcards.map((card,i) =>
              <HTMLCard
                  key={i}
                  url={card.url}
                  src={card.src}
                  alt={card.alt}
                  cardtitle={card.cardtitle}
                  languages={card.languages}
              />
          )}
        </div>
    )
  }
}

export default App;
