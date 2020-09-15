import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { SELECT_OPT } from '../constants';

const SizeSelector = ({ handleSelectOnClick}) => {

    const [selectedSize, setSelectSize] = useState('short');

    const handleSelectOnChange = ({target: {value}}) => {
        setSelectSize(value);
    }


    return (
        <Form className="text-center">
            <Form.Group>
                <Form.Label>Выберите объем данных:</Form.Label>
                <Form.Control className="mx-auto" size="sm" onChange={handleSelectOnChange} defaultValue={selectedSize} as="select"  >
                    {SELECT_OPT.map(({value, label} ,i ) =>
                        <option key={i} value={value}>{label}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Button onClick={()=> { handleSelectOnClick(selectedSize) }} variant="success">Загрузить!</Button>
        </Form>
    );
};

SizeSelector.propTypes = {
    handleOnChange: PropTypes.func,
    handleSelectOnSubmit: PropTypes.func,
    options: PropTypes.array,
    selectValue: PropTypes.string,
  }
  
SizeSelector.defaultProps = {
    handleSelectOnChange: () => {},
    handleSelectOnSubmit: () => {},
    options: [],
    selectValue: '',
}

export default SizeSelector;