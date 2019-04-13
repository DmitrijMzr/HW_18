import React from 'react';

import ItemToDo from './itemToDo'

const ToDoList = props => {
    const {
        items,
        removeItem,
        markTodoDone,
        editItem,
        saveItem
    } = props

    let renderedItems = items.map((item, index) => {
        return (
            <ItemToDo
                key={index}
                item={item}
                index={index}
                removeItem={removeItem}
                markTodoDone={markTodoDone}
                editItem={editItem}
                saveItem={saveItem}/>
        );
    });

    return (
            <div className={'todo-list'}>
                {renderedItems}
            </div>
    );
}

export default ToDoList;