import React from 'react';
import ItemToDo from '../itemToDo';

describe('itemToDo.onClickClose', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        //sandbox.restore();
        //sandbox.resetHistory();
    });

    it('should call removeItem with index', () => {
        const props = {
            key: 1,
            item: {
                index: 2,
                value: 'some value',
                done: false
            },
            index: 3,
            removeItem: (index) => {console.log('removing with ' + index)},
            markTodoDone: () => {},
            editItem: () => {},
            saveItem: () => {}
        };
        const component = shallow(<ItemToDo {...props} />);
        const instance = component.instance();
        const spy = sandbox.spy(props, 'removeItem');
        instance.onClickClose();
        sandbox.assert.calledOnce(spy);
        sandbox.assert.calledWith(spy, props.item.index)
    });
});