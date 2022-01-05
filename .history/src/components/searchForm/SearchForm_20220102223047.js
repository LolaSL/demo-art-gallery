import React from "react";
import { useTranslation } from 'react-i18next';
import './SearchForm.sccs'

const SearchForm = ({ text, onChange }) => {
    const [t] = useTranslation();
    const handleSearchChange = e => {
        console.log("I'm searching for: " + e.target.value);
        onChange(e.target.value)
    };

    return (
        <div className="form-outline">
            <input
                required
                id="search-input"
                type="text"
                value={text}
                onChange={handleSearchChange}
                placeholder={t("search.searchTitle")}
            />
        </div>
    );
}
export default SearchForm;