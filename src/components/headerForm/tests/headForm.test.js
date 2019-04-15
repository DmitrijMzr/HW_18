import ComponentHead from '../head';
import React from 'react';


describe('component snapshot', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<ComponentHead />);
        expect(wrapper).matchSnapshot();
    });
});