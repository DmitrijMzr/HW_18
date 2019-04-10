import React, { Component } from "react";
import OmponentHead from "./componenthead/сomponentHead";
import PlaceHolder from "./placeholder/placeHolder";
import FilterComponent from "./filter/filterComponent";

import './topContainer.less';

class TopContainer extends Component {
    render() {
        return (
            <div class={'topContainer'}>
                <OmponentHead/>
                <PlaceHolder/>
                <FilterComponent/>
            </div>
        );
    }
}

export default TopContainer;