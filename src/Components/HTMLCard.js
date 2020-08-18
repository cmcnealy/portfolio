import React from 'react';

export default class HTMLCard extends React.Component {
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