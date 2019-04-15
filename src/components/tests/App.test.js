import React from 'react';
import App from '../App';
import todoItems from "../components/store";


describe ('App component', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<App {...todoItems} />);
        expect(wrapper).matchSnapshot();
    });
});