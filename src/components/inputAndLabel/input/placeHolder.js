import React, { Component } from "react";

import './placeHolder.less';


class PlaceHolder extends Component {
    render() {
        return (
            <div className={'place-holder'}>
                <input id="task" type="text" />
                    <label htmlFor="task"/>
                    <button type="button" className="add-text">Add</button>
            </div>
        );
    }
}

export default PlaceHolder;