import React, { Component } from "react";

import ItemsTask from './itemsTask'

import './ItemsContainer.less';


class ContainerItems extends Component {
    render() {
        return (
            <div className={'items-container'}>
                < ItemsTask />
            </div>
        );
    }
}

export default ContainerItems;