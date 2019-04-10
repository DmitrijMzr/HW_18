import React, { Component } from "react";

import TaskItem from '../itemTask'

import './tasks.less';


class Tasks extends Component {
    render() {
        return (
            <div className={'all-task-items'}>
                < TaskItem />
            </div>
        );
    }
}

export default Tasks;