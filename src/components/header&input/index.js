import React, { Component } from "react";
import ComponentHead from "./head/сomponentHead";
import Checkbox from "./checkbox/checkbox";

class InputsHeader extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidMount() {
        this.refs.itemName.focus();
    }
    onSubmit(event) {
        event.preventDefault();
        var newItemValue = this.refs.itemName.value;

        if(newItemValue) {
            this.props.addItem({newItemValue});
            this.refs.form.reset();
        }
    }
    render() {
        return (
            <div className={'container-input'}>
                <ComponentHead />
                     <form ref="form" onSubmit={this.onSubmit} className="container-input__form">
                         <input type="text" ref="itemName" className="container-input__form-input" placeholder="add a new todo..."/>
                         <button type="submit" className="container-input__form-button">Add</button>
                     </form>
                <Checkbox/>
            </div>

        );
    }
}

export default InputsHeader;
