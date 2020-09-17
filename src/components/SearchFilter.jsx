import React, { useState }from 'react';
import PropTypes from 'prop-types';
import {FormControl, Button, InputGroup} from 'react-bootstrap';


const SearchFilter = ({ handleSearchOnClick}) => {
    const [searchValue, setSeachValue] = useState('');
    
    const handleSearchOnChange = ({target: {value}}) => {
        setSeachValue(value);
    }
    return(
        <>
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Поиск по таблице"
                    aria-label="Поиск по таблице"
                    aria-describedby="search"
                    defaultValue={searchValue}
                    onChange={handleSearchOnChange}
                />
                <InputGroup.Append  >
                    <Button onClick={()=> { handleSearchOnClick(searchValue) } } variant="outline-secondary">Поиск</Button>
                </InputGroup.Append>
            </InputGroup>
        </>
    );
}

SearchFilter.propTypes = {
    handleSearchOnClick: PropTypes.func,
}

SearchFilter.defaultProps = {
    handleSearchOnClick: () => {},
}

export default SearchFilter;