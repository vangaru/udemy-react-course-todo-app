import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ( {todos, searchTerm, filter, onTodoListItemDeleted, onToggleImportant, onToggleDone } ) => {

    const checkFilter = (item) => {
        if (filter === 'all')
            return true;
        if (filter === 'active')
            return !item.done;
        if (filter === 'done')
            return item.done;
    }

    const todoElements = todos
        .filter((item) => checkFilter(item))
        .filter((item) => item.label.trim()
            .toLowerCase()
            .includes(searchTerm.toLowerCase().trim()))
        .map((item) => {
        const { id, ...props } = item;
        return (
            <li key={ id } className="list-group-item">
                <TodoListItem { ...props }
                              onDeleted={ () => onTodoListItemDeleted(id) }
                              onToggleImportant={ () => onToggleImportant(id) }
                              onToggleDone={() => onToggleDone(id) }
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list mt-2">
            { todoElements }
        </ul>
    );
};

export default TodoList;