import React, { Component } from "react";

import './filterComponent.css';


class FilterComponent extends Component {
    render() {
        return (
            <div className={'filter'}>
                <label htmlFor="checked">Hide completed task</label>
                <input id="checked" type="checkbox" />
            </div>
        );
    }
}

export default FilterComponent;