import React from 'react';
import ToDoList from '../listToDo';

describe ('ToDoList component', () => {
    it('should render correctly', () => {
        const props = {
            items: [
                {
                    index: 2,
                    value: 'some value',
                    done: false
                }
            ],
            removeItem: () => {},
            markTodoDone: () => {},
            editItem: () => {},
            saveItem: () => {}
        };
        const wrapper = shallow(<ToDoList {...props} />);
        expect(wrapper).matchSnapshot();
    });


});