import React from 'react';
import PropTypes from 'prop-types';
import {FormControl, Button, InputGroup} from 'react-bootstrap';


const SearchFilter = ({ searchQuery, handleSearchOnChange, handleSearchOnClick}) => (
    <InputGroup className="mb-3">
        <FormControl
            placeholder="Поиск по таблице"
            aria-label="Поиск по таблице"
            aria-describedby="search"
            defaultValue={searchQuery}
            onChange={handleSearchOnChange}
        />
        <InputGroup.Append  >
            <Button onClick={handleSearchOnClick} variant="outline-secondary">Поиск</Button>
        </InputGroup.Append>
    </InputGroup>
);

SearchFilter.propTypes = {
    handleFilter: PropTypes.func,
    value: PropTypes.string,
}

SearchFilter.defaultProps = {
    handleFilter: () => {},
    value: '',
}

export default SearchFilter;