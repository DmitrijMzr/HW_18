import React, { Component } from "react";
import ComponentHead from "./head/сomponentHead";
//import Checkbox from "./checkbox/checkbox";

class InputsHeader extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.check = true;

    }
    componentDidMount() {
        this.refs.itemName.focus();
    }
    onSubmit(event) {
        event.preventDefault();
        const newItemValue = this.refs.itemName.value;

        if(newItemValue) {
            this.props.addItem({newItemValue});
            this.refs.form.reset();
            this.refs.itemName.focus();
        }
    }
    onChange() {
        let check = this.check;
        if (this.check) {
            this.props.hideDoneTask({check});
            this.check = false;
        } else {
            this.props.hideDoneTask({check});
            this.check = true;
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
                <div className={'container-input__checkbox checkbox'}>
                    <label htmlFor="checked">Hide completed task</label>
                    <input id="checked" type="checkbox" onChange={this.onChange}/>
                </div>
            </div>

        );
    }
}

export default InputsHeader;
