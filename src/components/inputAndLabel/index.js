import React, { Component } from "react";
import ComponentHead from "./lable/ComponentHead";
import './topContainer.less';
import PlaceHolder from "./input/placeHolder";


class TopContainer extends Component {
    render() {
        return (
            <div className={'topContainer'}>
                <ComponentHead/>
                <PlaceHolder/>
            </div>
        );
    }
}

export default TopContainer;