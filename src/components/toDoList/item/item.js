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
        let todoClass = this.props.item.done ? "done" : "undone";  // сделать курсор поинт

        return (
            <div className={'todo-list__item'}>
                <div className={todoClass} aria-hidden="true" onClick={this.onClickDone}>
                    <div className="todo-list__item-description">{this.props.item.value}</div>
                    <div className="todo-list__item-bttn">
                        <button type="button" className="todo-list__item-bttn_bttn-edit" onClick={this.onClickClose}>&times;</button>
                        <button type="button" className="todo-list__item-bttn_bttn-del" onClick={this.onClickClose}>&times;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemToDo;