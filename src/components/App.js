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
        this.hideDoneTask = this.hideDoneTask.bind(this);
        this.editItem = this.editItem.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.arrForSaveState = [];
        this.state = {todoItems: todoItems};
        this.lastIndex = 3;
    }
    addItem(todoItem) {
        todoItems.unshift({
            index: ++this.lastIndex,
            value: todoItem.newItemValue,
            done: false
        });
        this.setState({todoItems: todoItems});
    }
    removeItem (itemIndex) {
        todoItems.splice(itemIndex, 1);
        this.setState({todoItems: todoItems});
        console.log(todoItems);
    }

    editItem (itemIndex) {
        console.log('editing item', itemIndex);
        this.setState(state => {
            const item = state.todoItems[itemIndex];
            item.editing = true;
            return {todoItems: state.todoItems};
        });
    }

    saveItem (itemIndex, value) {
        console.log('saving item', itemIndex, value);
        this.setState(state => {
            const item = state.todoItems[itemIndex];
            item.editing = false;
            item.value = value;
            return {todoItems: state.todoItems};
        });
    }

    markTodoDone(itemIndex) {
        var todo = todoItems[itemIndex];
        todoItems.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
        this.setState({todoItems: todoItems});
    }
    hideDoneTask(check){

        let arr = [];

        if (check) {
            this.arrForSaveState = todoItems;
            todoItems.forEach( (task) => {
                if (task.done === false) {
                    arr.push(task);
                }
                this.setState({todoItems: arr});
            })
        } else {
            arr = this.state.arrForSaveState
            this.setState({todoItems: arr})
        }

    }
    render() {
        return (
            <div className={'app'}>
                <div className="app__todo">
                    <InputsHeader addItem={this.addItem} hideDoneTask={this.hideDoneTask}/>
                    <ToDoList items={this.props.initItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} editItem={this.editItem} saveItem={this.saveItem}/>
                </div>
            </div>
        );
    }
}

export default App;