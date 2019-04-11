import React, { Component } from "react";

import Button from './buttons'

class ItemToDo extends Component {

    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
        this.onClickDone = this.onClickDone.bind(this);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onClickClose() {
        const index = parseInt(this.props.index);
        this.props.removeItem(index);
    }
    onClickDone() {
        const index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }

    onClickEdit() {
        const index = parseInt(this.props.index);
        this.props.editItem(index);
    }

    onClickSave() {
        console.log('saving in item', this.refs.description.innerText)
        const index = parseInt(this.props.index);
        console.log(this.props.saveItem);
        this.props.saveItem(index, this.refs.description.innerText);
    }

    render() {
        let todoClass = this.props.item.done ? "done" : "undone";  // сделать курсор поинт
        let descEl;
        let editBtnName = 'Edit';
        let editBtnListener = this.onClickEdit;
        if (this.props.item.editing) {
            todoClass = "undone";
            editBtnName = 'Save';
            editBtnListener = this.onClickSave;
            descEl = <div ref="description" style={{border: "1px dashed gray", outline: "none", background: "white"}} contentEditable="true" className="todo-list__item-description">{this.props.item.value}</div>;
        } else {
            descEl = <div className="todo-list__item-description" onClick={this.onClickDone}>{this.props.item.value}</div>;
        }

        return (
            <div className={'todo-list__item'}>
                <div className={todoClass} aria-hidden="true">
                    {descEl}
                    <div className="todo-list__item-bttn">
                        <button type="button" className="todo-list__item-bttn_bttn-edit" onClick={editBtnListener}>{editBtnName}</button>
                        <button type="button" className="todo-list__item-bttn_bttn-del" onClick={this.onClickClose}>&times;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemToDo;