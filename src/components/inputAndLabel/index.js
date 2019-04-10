import React, { Component } from "react";
import ComponentHead from "./componenthead/сomponentHead";
import PlaceHolder from "./placeholder/placeHolder";
import FilterComponent from "./filter/filterComponent";

import './topContainer.less';


class TopContainer extends Component {
    render() {
        return (
            <div className={'topContainer'}>
                <ComponentHead/>
                <PlaceHolder/>
                <FilterComponent/>
            </div>
        );
    }
}

export default TopContainer;