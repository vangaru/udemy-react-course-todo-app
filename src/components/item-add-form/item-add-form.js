import React from "react";

import './item-add-form.css';

const ItemAddForm = ( { onItemAdded } ) => {
    return(
        <div className="item-add-form mt-2">
            <button className="btn btn-success"
                    onClick={ () => onItemAdded('Hello world') }>
                Add task
            </button>
        </div>
    )
}

export default ItemAddForm;