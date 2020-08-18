import React from 'react';

export default class JSCard extends React.Component {
    render(){
        return (
            <div className="prog-tile col-auto m-3 mb-5 p-0">
                <div>
                    <div className="tile-js text-center p-3 breakpoint-width">
                        <h4 className="font-weight-bold">{this.props.title}</h4>
                        <form id={this.props.formID}>
                            <input className="form-control text-center" type="text" id={this.props.named} name={this.props.named} placeholder="Enter"/>
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