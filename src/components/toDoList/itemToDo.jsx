import React, { Component } from "react";

class ItemToDo extends Component {

    state = {
        isEdit: false,
        renameItem: this.props.item.value
    }

    onClickClose = () => {
        const index = parseInt(this.props.index);
        this.props.removeItem(index);
    }
    onClickDone = () => {
        const index = parseInt(this.props.index);
        this.props.markTodoDone(index);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    saveItem = () => {
       const index = parseInt(this.props.index);
        this.props.saveItem(index, this.state.renameItem);

        this.setState(() => ({isEdit: false}))
    }

    editButton = () => {

        this.setState(() => ({isEdit: true}))
       /* const index = parseInt(this.props.index);
        this.props.editItem(index);*/
    }

    render() {
        let todoClass = this.props.item.done ? "done" : "undone";

        let toggleButton;
        let toggleTitle;

        if(!this.state.isEdit) {
            toggleTitle = <div className="todo-list__item-description"
                                onClick={this.onClickDone}>{this.props.item.value}</div>
        } else {
            toggleTitle = <div className="todo-list__item-description">
                                <input
                                    type='text'
                                    name='renameItem'
                                    className="todo-list__item-input"
                                    value={this.state.renameItem}
                                    onChange={this.onChange}/>
                          </div>
        }

        if(!this.state.isEdit) {
            toggleButton = <button type="button"
                                   className="todo-list__item-bttn_bttn-edit"
                                   onClick={this.editButton}>Edit</button>
        } else {
            toggleButton = <button type="button"
                                   className="todo-list__item-bttn_bttn-save"
                                   onClick={this.saveItem}>Save</button>
        }

        return (
            <div className={'todo-list__item'}>
                <div className={todoClass} aria-hidden="true">
                    {toggleTitle}
                    <div className="todo-list__item-bttn">
                        {toggleButton}
                        <button
                            type="button"
                            className="todo-list__item-bttn_bttn-del"
                            onClick={this.onClickClose}>&times;</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemToDo;