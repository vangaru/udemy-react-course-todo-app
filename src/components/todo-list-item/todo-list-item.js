import React, {useState} from "react";
import './todo-list-item.css'

const TodoListItem = ( { label, important = false } ) => {

    const [isDone, setIsDone] = useState(false);

    const listItemStyle ={
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal',
    };

    let classNames = 'todo-list-item';
    if (isDone) {
        classNames += ' done';
    }

    const onLabelClick = () => {
        setIsDone(!isDone);
    };

    return (
        <span className={classNames} onClick={ onLabelClick }>
            <span className="todo-list-item-label" style={listItemStyle}>{ label }</span>
            <button type="button" className="btn btn-outline-success btn-sm">
                <i className="fa fa-exclamation" />
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
};

export default TodoListItem;