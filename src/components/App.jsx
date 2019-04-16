import React, { Component } from "react";

import InputsHeader from "./headerForm/formToDo";
import ToDoList from "./toDoList/listToDo";

//import '../styles/App.less';

class App extends Component {

    state = {
        todoItems: []
    }

    arrDoneTask = [];
    lastIndex = 3;

    addItem = (todoItem) => {
        const arr = this.state.todoItems;
        arr.unshift({
            index: this.lastIndex,
            value: todoItem,
            done: false
        });
        this.setState(() => ({todoItems: arr}));
    }

    removeItem = (itemIndex) => {
        const arr = this.state.todoItems;
        arr.splice(itemIndex, 1);
        this.setState(() => ({todoItems: arr}));
    }

    saveItem = (itemIndex, value) => {
        this.setState(state => {
            const item = this.state.todoItems[itemIndex];
            item.value = value;
            return {todoItems: state.todoItems};
        });
    }

    markTodoDone = (itemIndex) => {
        const arr = this.state.todoItems;
        const todo = this.state.todoItems[itemIndex];
        arr.splice(itemIndex, 1);
        todo.done = !todo.done;
        todo.done ? arr.push(todo) : arr.unshift(todo);
        this.setState(() => ({todoItems: arr}));
    }

    hideDoneItem = (check) =>{

        let arrUndoneTask = [];

        if (check) {
            this.arrDoneTask = this.state.todoItems;
            this.state.todoItems.forEach( (task) => {
                if (task.done === true) {
                    this.arrDoneTask.push(task);
                } else {
                    arrUndoneTask.push(task)
                }
                this.setState(() => ({todoItems: arrUndoneTask}));
            })
        } else {

            this.setState(() => ({todoItems: this.arrDoneTask}))
        }
    }

    render() {
        return (
            <div className={'app'}>
                <div className="app__todo">
                    <InputsHeader
                        addItem = {this.addItem}
                        hideDoneItem = {this.hideDoneItem}/>
                    <ToDoList
                        items = {this.state.todoItems}
                        removeItem = {this.removeItem}
                        markTodoDone = {this.markTodoDone}
                        editItem = {this.editItem}
                        saveItem = {this.saveItem}/>
                </div>
            </div>
        );
    }
}

export default App;