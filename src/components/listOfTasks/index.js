import React, { Component } from "react";

import Tasks from './allTaskItems'

import './bottomContainer.less';


class BottomContainer extends Component {
    render() {
        return (
            <div className={'bottomContainer'}>
                < Tasks />
            </div>
        );
    }
}

export default BottomContainer;