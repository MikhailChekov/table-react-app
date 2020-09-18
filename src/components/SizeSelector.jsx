import React, { useState } from "react";
import PropTypes from 'prop-types';
import { SELECT_OPT } from '../constants';
import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const SizeSelector = ({ handleSelectOnClick}) => {

    const [selectedSize, setSelectSize] = useState('short');

    const handleSelectOnChange = ({target: {value}}) => {
        setSelectSize(value);
    }

    return (
        <Container>   
            <Row>
                <Col className={'col-md-auto mx-auto'}>
                    <Form className="text-center">
                        <Form.Group>
                            <Form.Label>Выберите объем данных:</Form.Label>
                            <Form.Control className="mx-auto" size="sm" onChange={handleSelectOnChange} defaultValue={selectedSize} as="select" >
                                {SELECT_OPT.map(({value, label} ,i ) =>
                                    <option key={i} value={value}>{label}</option>
                                )}
                            </Form.Control>
                        </Form.Group>
                        <Button onClick={()=> { handleSelectOnClick(selectedSize) }} variant="success">Загрузить!</Button>
                    </Form>
                </Col>
            </Row>
        </Container> 
    );
};

SizeSelector.propTypes = {
    handleSelectOnClick: PropTypes.func,
}
  
SizeSelector.defaultProps = {
    handleSelectOnClick: () => {},
}

export default SizeSelector;