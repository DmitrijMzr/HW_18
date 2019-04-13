import React, { Component } from "react";

import InputsHeader from "./headerForm/formToDo";
import ToDoList from "./toDoList/listToDo";
import todoItems from "./store.js"

import '../styles/App.less';

class App extends Component {
    state = {
        todoItems
    }

    arrForSaveState = [];
    lastIndex = 3;

    addItem = (todoItem) => {
        this.state.todoItems.unshift({
            index: this.lastIndex,
            value: todoItem,
            done: false
        });
        this.setState({todoItems: todoItems});
    }

    removeItem = (itemIndex) => {
        this.state.todoItems.splice(itemIndex, 1);
        this.setState({todoItems: todoItems});
    }

    editItem = (itemIndex) => {
        console.log('editing item', itemIndex);
        this.setState(() => {
            const item = this.state.todoItems[itemIndex];
            item.editing = true;
            return {todoItems: this.state.todoItems};
        });
    }

    saveItem = (itemIndex, value) => {
        console.log('saving item', itemIndex, value);
        this.setState(state => {
            const item = this.state.todoItems[itemIndex];
            item.editing = false;
            item.value = value;
            return {todoItems: state.todoItems};
        });
    }

    markTodoDone = (itemIndex) => {
        const todo = this.state.todoItems[itemIndex];
        this.state.todoItems.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? this.state.todoItems.push(todo) : this.state.todoItems.unshift(todo);
        this.setState(() => ({todoItems: todoItems}));
    }
    hideDoneTask = (check) =>{

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
                    <InputsHeader addItem={this.addItem}/>
                    <ToDoList items={this.state.todoItems} removeItem={this.removeItem} markTodoDone={this.markTodoDone} editItem={this.editItem} saveItem={this.saveItem}/>
                </div>
            </div>
        );
    }
}

export default App;