import React, { Component } from "react";

import './filterComponent.css';


class FilterComponent extends Component {
    render() {
        return (
            <div className={'filter'}>
                <input id="checked" type="checkbox" />
                <label htmlFor="checked"></label>
            </div>
        );
    }
}

export default FilterComponent;