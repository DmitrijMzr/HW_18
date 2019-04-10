import React, { Component } from "react";



class PlaceHolder extends Component {
    render() {
        return (
            <div class={'place-holder'}>
                <input id="task" type="text" />
                <label htmlFor="task"></label>
                <button type="button" className="add-text">Add</button>
            </div>
        );
    }
}
export default PlaceHolder;
