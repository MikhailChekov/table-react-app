import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

 const SizeSelector = ({ handleSelectOnChange, handleSelectOnSubmit, options, selectValue}) => {
    return (
        <Form className="text-center">
            <Form.Group>
                <Form.Label>Выберите объем данных:</Form.Label>
                <Form.Control className="mx-auto" size="sm" onChange={handleSelectOnChange} defaultValue={selectValue} as="select"  >
                    {options.map(({value, label} ,i ) =>
                        <option key={i} value={value}>{label}</option>
                    )}
                </Form.Control>
            </Form.Group>
            <Button onClick={handleSelectOnSubmit} variant="success">Загрузить!</Button>
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