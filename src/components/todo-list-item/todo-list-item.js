import React, {useState} from "react";
import './todo-list-item.css'

const TodoListItem = ( { label, onDeleted } ) => {

    const [isDone, setIsDone] = useState(false);
    const [isImportant, setIsImportant] = useState(false);

    let classNames = 'todo-list-item';
    if (isDone) {
        classNames += ' done';
    }

    if (isImportant) {
        classNames += ' important';
    }

    const onLabelClick = () => {
        setIsDone(!isDone);
    };

    const onImportantButtonClick = () => {
        setIsImportant(!isImportant);
    }

    return (
        <span className={classNames}>
            <span className="todo-list-item-label" onClick={ onLabelClick }>{ label }</span>
            <button type="button" className="btn btn-outline-success btn-sm"
                onClick = { onImportantButtonClick }>
                <i className="fa fa-exclamation" />
            </button>
            <button type="button" className="btn btn-outline-danger btn-sm"
                onClick={ onDeleted }>
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
};

export default TodoListItem;