import React, { Component } from "react";

import TopContainer from "./inputAndLabel";
import ContainerItems from "./listOfTasks";

import './App.less';


class App extends Component {
    render() {
        return (
            <div className={'app'}>
                <div className="todo">
                    <TopContainer/>
                    <ContainerItems/>
                </div>
            </div>
        );
    }
}

export default App;