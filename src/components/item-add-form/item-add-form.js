import React, {useState} from "react";

import './item-add-form.css';

const ItemAddForm = ( { onItemAdded } ) => {
    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdded(label);
    }

    return(
        <form className="item-add-form mt-2" onSubmit={ onSubmit }>
            <div className="form row">
                <div className="col">
                    <input type="text" className="form-control" onChange={ onLabelChange }
                           placeholder="what needs to be done" />
                </div>
                <div className="col">
                    <button type="submit" className="btn btn-outline-info">
                        Add task
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ItemAddForm;