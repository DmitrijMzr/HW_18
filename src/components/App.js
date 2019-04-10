import React, { Component } from "react";

import InputsHeader from "./header&input";
import ToDoList from "./toDoList";
import todoItems from "./store.js"

import '../styles/App.less';

class App extends Component {
    constructor (props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.markTodoDone = this.markTodoDone.bind(this);
        this.state = {todoItems: todoItems};
    }
    addItem(todoItem) {
        todoItems.unshift({
            index: todoItems.length+1,
            value: todoItem.newItemValue,
            done: false
        });
        this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
        todoItems.splice(itemIndex, 1);
        this.setState({todoItems: todoItems});
    }
    markTodoDone(itemIndex) {
        var todo = todoItems[itemIndex];
        todoItems.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        this.setState({todoItems: todoItems});
    }
    render() {
        return (
            <div className={'app'}>
                <div className="todo">
                    <InputsHeader addItem={this.addItem} />
                    <ToDoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone}/>
                </div>
            </div>
        );
    }
}

export default App;