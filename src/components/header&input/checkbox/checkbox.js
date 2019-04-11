import React, { Component } from "react";

class Checkbox extends Component {
    render() {
        return (
            <div className={'container-input__checkbox checkbox'}>
                <label htmlFor="checked">Hide completed task</label>
                <input id="checked" type="checkbox" />
            </div>
        );
    }
}

export default Checkbox;