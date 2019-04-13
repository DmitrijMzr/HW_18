import React from 'react';

import ItemToDo from './itemToDo'

const ToDoList = props => {

    const {
        items,
        removeItem,
        markTodoDone,
        editItem,
        saveItem,
        isHidden,
        checkedHide
    } = props

    let renderedItems = items.map((item, index) => {

        let todoTask;
        if (checkedHide(item, isHidden)) {
            todoTask = <ItemToDo
                          key={index}
                          item={item}
                          index={index}
                          removeItem={removeItem}
                          markTodoDone={markTodoDone}
                          editItem={editItem}
                          saveItem={saveItem}/>
        } else {
            todoTask = null
        }
        return todoTask
    });

    return (
            <div className={'todo-list'}>
                {renderedItems}
            </div>
    );
}

export default ToDoList;