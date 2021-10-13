import './search-panel.css'
import {useState} from "react";

const SearchPanel = ( { onSearch } ) => {
    const [searchLabel, setSearchLabel] = useState('');

    const onSearchPanelChanged = (e) => {
        setSearchLabel(e.target.value);
        onSearch(searchLabel);
    }

    return (
        <input
            className="search-input form-control"
            placeholder="search"
            onChange={ onSearchPanelChanged }
            value={searchLabel}
        />
    );
};

export default SearchPanel;