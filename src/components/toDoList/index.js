import React, { Component } from "react";

import ItemToDo from './item/item'

class ToDoList extends Component {
    render() {
        let items = this.props.items.map((item, index) => {
            return (
                <ItemToDo key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
            );
        });
        return (
            <div className={'items-container'}>
                {items}
            </div>
        );
    }
}

export default ToDoList;