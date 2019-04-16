import React from 'react';
import App from '../App';
import todoItems from "../components/store";


describe ('App component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<App {...todoItems} />);
        expect(wrapper).matchSnapshot();
    });
});

describe('App.addItem', () => {
    let component;
    let props;

    before(() => {
        props = {initItems: []};
        component = shallow(<App {...props}/>);
    });

    it('should add in item', () => {
        const todos = [{
            index: 1,
            value: 'title',
            done: false
        }];
        const item = {
            index: 3,
            value: 'some value',
            done: false
        };
        const instance = component.instance();
        instance.setState(() => ({ todos }));

        instance.addItem(item.value);

        assert.deepEqual(instance.state.todoItems[0], item);
    });
});