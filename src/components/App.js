import React, { Component } from "react";

import TopContainer from "./inputAndLabel";
import BottomContainer from "./listOfTasks";

import './App.less';


class App extends Component {
    render() {
        return (
            <div className={'app'}>
                <div className="todo">
                    <TopContainer/>
                    <BottomContainer/>
                </div>
            </div>
        );
    }
}

export default App;