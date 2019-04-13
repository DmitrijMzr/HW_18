import React, { Component } from 'react';
import ComponentHead from './head';

class InputsHeader extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title) {
            this.props.addItem(this.state.title);
            this.setState(() => ({title: ''}));
        }
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div className={'container-input'}>
                <ComponentHead />
                <form className='container-input__form'
                    onSubmit= {this.onSubmit}>
                    <input
                        className='container-input__form-input'
                        type='text'
                        name="title"
                        value={this.state.title}
                        placeholder='add new todo ...'
                        onChange={this.onChange}/>
                    <button
                        className='container-input__form-button'
                        type='submit'>
                        Add
                    </button>
                </form>
                <div className={'container-input__checkbox checkbox'}>
                    <label htmlFor="checked">Hide completed task</label>
                    <input
                        id="checked"
                        type="checkbox"/>
                </div>
            </div>

        );
    }
}

export default InputsHeader;
