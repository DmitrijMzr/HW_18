import React, { Component } from "react";

import Button from './buttons'

class ItemToDo extends Component {

    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
    }
    onClickClose() {
        var index = parseInt(this.props.index);
        this.props.removeItem(index);
    }
    onClickDone() {
        var index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }

    render() {
        let todoClass = this.props.item.done ? "done" : "undone";

        return (
            <div className={'to-do-item'}>
                <div className={todoClass}>
                    <span className="glyphicon glyphicon-ok icon" aria-hidden="true" onClick={this.onClickDone}></span>
                    {this.props.item.value}
                    <button type="button" className="close" onClick={this.onClickClose}>&times;</button>
                </div>
            </div>
        );
    }
}

export default ItemToDo;