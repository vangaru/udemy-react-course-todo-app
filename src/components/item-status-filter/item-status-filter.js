import React from "react";
import './item-status-filter.css';

const ItemStatusFilter = ( { onFilter } ) => {
    const allButton = document.getElementById('all');
    const activeButton = document.getElementById('active');
    const doneButton = document.getElementById('done');

    const makeButtonActive = (button) => {
        if (button.classList.contains('btn-info')) return;
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-info');
    }

    const makeButtonNotActive = (button) => {
        if (button.classList.contains('btn-outline-secondary')) return;
        button.classList.remove('btn-info');
        button.classList.add('btn-outline-secondary');
    }

    const onAllButtonClick = () => {
        makeButtonActive(allButton);
        makeButtonNotActive(activeButton);
        makeButtonNotActive(doneButton);
        onFilter('all');
    }

    const onDoneButtonClick = () => {
        makeButtonActive(doneButton);
        makeButtonNotActive(activeButton);
        makeButtonNotActive(allButton);
        onFilter('done');
    }

    const onActiveButtonClick = () => {
        makeButtonActive(activeButton);
        makeButtonNotActive(allButton);
        makeButtonNotActive(doneButton);
        onFilter('active');
    }

    return (
        <div className="btn-group d-flex justify-content-end">
            <button type="button" id="all"
                    className="btn btn-info" onClick={ onAllButtonClick }>All</button>
            <button type="button" id="active"
                    className="btn btn-outline-secondary" onClick={ onActiveButtonClick }>Active</button>
            <button type="button" id="done"
                    className="btn btn-outline-secondary" onClick={ onDoneButtonClick }>Done</button>
        </div>
    );
};

export default ItemStatusFilter;