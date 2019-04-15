import React from 'react';
import ComponentHead from '../head';
import ItemToDo from "../toDoList/itemToDo";
import InputsHeader from "../App";


describe('ComponentHead snapshot', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<ComponentHead />);
        expect(wrapper).matchSnapshot();
    });
});

describe ('InputsHeader component', () => {
    it('should render correctly', () => {
        const props = {
            addItem: () => {},
            hideDoneItem: () => {}
        };
        const wrapper = shallow(<InputsHeader {...props} />);
        expect(wrapper).matchSnapshot();
    });


});