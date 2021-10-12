import React, {useState} from "react";

import './item-add-form.css';

const ItemAddForm = ( { onItemAdded } ) => {
    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        if (e.target.value.length < 3) {
            disableSubmitButton();
        } else {
            enableSubmitButton();
        }
        setLabel(e.target.value);
    }

    const onSubmit = (e) => {
        disableSubmitButton();
        e.preventDefault();
        onItemAdded(label);
        setLabel('');
    }

    const disableSubmitButton = () => {
        const submitButton = document.getElementById('submit-button');
        submitButton.setAttribute('disabled', '');
    }

    const enableSubmitButton = () => {
        const submitButton = document.getElementById('submit-button');
        submitButton.removeAttribute('disabled');
    }

    return(
        <form className="item-add-form mt-2" onSubmit={ onSubmit }>
            <div className="form row">
                <div className="col">
                    <input type="text" className="form-control" onChange={ onLabelChange }
                           placeholder="what needs to be done" value={label}/>
                </div>
                <div className="col">
                    <button type="submit"
                            className="btn btn-outline-info"
                            id="submit-button" disabled>
                        Add task
                    </button>
                </div>
            </div>
        </form>
    )
}

export default ItemAddForm;