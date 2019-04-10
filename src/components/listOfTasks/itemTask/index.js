import React, { Component } from "react";

import Button from './buttons'

import './taskElem.less';


class TaskItem extends Component {
    state = {
        id: 1,
        title: 'God',
        bttn1: 'edit',
        bttn2: 'delete'
    }
    render() {
        return (
            <div className={'todo-item'}>
                <input type={'checkbox'} id={''}/>
                {this.state.title}
                < Button id={this.state.id} type={this.state.bttn1}/>
                < Button id={this.state.id} type={this.state.bttn2}/>
            </div>
        );
    }
}

export default TaskItem;