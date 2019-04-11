import React, { Component } from "react";

import ItemToDo from './item/item'

class ToDoList extends Component {

    render() {
        let items = this.props.items.map((item, index) => {
            return (
                <ItemToDo key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} editItem={this.props.editItem} saveItem={this.props.saveItem} />
            );
        });
        return (
            <div className={'todo-list'}>
                {items}
            </div>
        );
    }
}

export default ToDoList;