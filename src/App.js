import React from 'react';
import './App.css';
import { rot13 } from "./functions/rot13";
import { convertToRoman } from "./functions/roman-numeral";
import { palindrome } from "./functions/palindrome";
import { translatePigLatin } from "./functions/pig-latin";

class JSCard extends React.Component {
  render(){
    return (
        <div className="prog-tile col-auto m-3 mb-5 p-0">
          <div>
            <div className="tile-js text-center p-3 breakpoint-width">
              <h4 className="font-weight-bold">{this.props.title}</h4>
              <form id={this.props.formID}>
                <input className="form-control text-center" type="text" id="code" name="code" placeholder="Word or phrase"/>
              </form>
              <button className="btn btn-primary text-center m-2" type="button" onClick={this.props.function}>Submit</button>
              <div className="p-3" id={this.props.resultID}>
                Your result will appear here
              </div>
            </div>
            <div className="tile-title text-center font-weight-bold p-1">
              {this.props.cardtitle}
            </div>
            <div className="tile-title text-center p-1">
              {this.props.languages}
            </div>
          </div>
        </div>
    )
  }
}

class HTMLCard extends React.Component {
  render() {
    return(
        <div className="prog-tile col-auto m-3 mb-5 p-0">
          <a target="_blank" rel="noopener noreferrer" href={this.props.url}>
            <img className="tile-img breakpoint-width" src={this.props.src} alt={this.props.alt}/>
            <div className="tile-title text-center font-weight-bold p-1">{this.props.cardtitle}</div>
            <div className="tile-title text-center p-1">{this.props.languages}</div></a>
        </div>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      reactcards: [
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
          url: 'https://codepen.io/courtneymcnealy/full/NWNKaad',
          src: './images/programmer/drum-thumb.png',
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
          function: rot13,
          resultID: "rot13-result",
          cardtitle: "Caesar Cipher Converter",
          languages: "JavaScript"
        },
        {
          title: "Convert A Number To Roman Numerals (up to 3999)",
          formID: "roman-numeral-form",
          function: convertToRoman,
          resultID: "roman-numeral-result",
          cardtitle: "Roman Numeral Converter",
          languages: "JavaScript"
        },
        {
          title: "Palindrome Checker",
          formID: "palindrome-form",
          function: palindrome,
          resultID: "palindrome-result",
          cardtitle: "Palindrome Checker",
          languages: "JavaScript"
        },
        {
          title: "Convert Any Word To Pig Latin",
          formID: "pig-latin-form",
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
