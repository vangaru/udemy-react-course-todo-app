import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import React from "react";

const App = () => {

    const todoData = [
        { label: 'Drink coffee', id: 1 },
        { label: 'Make awesome app', id: 2 },
        { label: 'Have a lunch', id: 3 }
    ];

    return (
        <div className="container mt-5">
            <AppHeader />
            <div className="row">
                <div className="col-sm-6">
                    <SearchPanel />
                </div>
                <div className="col-sm-6">
                    <ItemStatusFilter />
                </div>
            </div>
            <TodoList todos={todoData} />
        </div>
    );
};

export default App;