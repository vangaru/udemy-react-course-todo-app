import React from "react";
import TodoListItem from "../todo-list-item";
import './todo-list.css';

const TodoList = ( {todos, onTodoListItemDeleted, onToggleImportant, onToggleDone } ) => {

    const todoElements = todos.map((item) => {
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