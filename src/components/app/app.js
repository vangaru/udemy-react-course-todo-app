import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";
import React, {useState} from "react";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const [todoData, setTodoData] = useState([
        { label: 'Drink coffee', id: 1, important: false, done: false },
        { label: 'Make awesome app', id: 2, important: false, done: false },
        { label: 'Have a lunch', id: 3, important: false, done: false }
    ]);

    const createTodoItem = (label, important = false, done = false) => {
        return {
            label: label,
            important: false,
            done: false,
            id: todoData.length === 0 ? 1 : todoData[todoData.length - 1].id + 1
        }
    }

    const deleteTodoListItem = (id) => {
        const newTodoData = todoData
            .filter((item) => item.id !== id);
        setTodoData(newTodoData);
    };

    const addTodoListItem = (label) => {
        const item = createTodoItem(label);
        const newTodoData = [
            ...todoData,
            item
        ];
        setTodoData(newTodoData);
    };

    const onToggleImportant = (id) => {
        const index = todoData.findIndex((el) => el.id === id);
        const oldItem = todoData[index];
        const newItem = {...oldItem, important: !oldItem.important};
        const newTodoData = [...todoData];
        newTodoData[index] = newItem;
        setTodoData(newTodoData);
    };

    const onToggleDone = (id) => {
        const index = todoData.findIndex((el) => el.id === id);
        const oldItem = todoData[index];
        const newItem = {...oldItem, done: !oldItem.done};
        const newTodoData = [...todoData];
        newTodoData[index] = newItem;
        setTodoData(newTodoData);
    };

    const search = (label) => {
        setSearchTerm(label);
    }

    const filterItems = (f) => {
        setFilter(f);
    }

    return (
        <div className="container mt-5">
            <AppHeader
                done={ todoData.filter((el) => el.done).length }
                toDo={ todoData.filter((el) => !el.done).length } />
            <div className="row">
                <div className="col-sm-6">
                    <SearchPanel onSearch={ search } />
                </div>
                <div className="col-sm-6">
                    <ItemStatusFilter onFilter={ filterItems }/>
                </div>
            </div>
            <TodoList
                todos={ todoData }
                searchTerm={ searchTerm }
                filter={ filter }
                onTodoListItemDeleted={ deleteTodoListItem }
                onToggleImportant={ onToggleImportant }
                onToggleDone = { onToggleDone }
            />
            <ItemAddForm onItemAdded={ addTodoListItem }/>
        </div>
    );
};

export default App;