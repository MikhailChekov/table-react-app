import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row,  Col, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddUserForm = ({ showUserAddFormToggle, handleAddNewUser}) => {

    const [formFields, setFormFields] = useState({
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    });

    const [formErrors, setFormErrors] = useState({
        id: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    });

    const emailRegex = RegExp(
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
    // 0-9 or starting with + , from 5-15 digital symbols
    const phoneRegex = RegExp(
        /^(([0-9]|\+)[- ]?)?(\(?\d{3,4}\)?[- ]?)?[\d\- ]{5,15}$/
    );
    // only digits
    const idRegex = RegExp(
        /^\d+$/
    );

    const isFormReady = Object.values(formFields).every(i => i.length > 1) && Object.values(formErrors).every(i => i.length < 1);

    const handleSubmit = (event) => {

        event.preventDefault();
        event.stopPropagation();

        if(isFormReady){

            handleAddNewUser(formFields);
        }

    };

    const changeHandler = ({target}) => {
        const {name, value} = target;
    
        let errors = { ...formErrors };

        switch (name) {
            case "firstName":
                errors.firstName =
                value.length <= 1 ? "Необходимо минимум 2 символа" : "";
                break;
            case "lastName":
                errors.lastName = 
                value.length <= 1 ? "Необходимо минимум 2 символа" : "";
                break;
            case "email":
                errors.email = emailRegex.test(value)
                ? ""
                : "Email должен быть вида: '* @ *'";
                break;
            case "phone":
                errors.phone = phoneRegex.test(value) 
                 ? "" 
                 : "Необходимо минимум 5 символов вида: 0-9 +";
                 break;
            case "id":
                errors.id = idRegex.test(value) 
                ?  "" 
                : "Id должен состоять из цифр";
                break;
            default:
                break;
          }

          setFormErrors(errors);

          setFormFields(prevState => ({
            ...prevState,
            [name] : value
          }));

    }
              
    return (
        <Container>   
            <Row>
                <Col className="col-md-auto mx-auto">
                    <Form 
                        style={{ border:'3px solid #f1f1f1', borderRadius: '5px', padding: '15px', background: '#fff' }} 
                        noValidate 
                        onSubmit={handleSubmit}
                    >
                        <Form.Row>
                            {/* Name */}
                            <Form.Group className="mx-3" controlId="formGroupName">
                                <Form.Label>Имя</Form.Label>
                                <Form.Control 
                                    required
                                    initialvalue={formFields.firstName}
                                    name="firstName"
                                    className={formErrors.firstName.length > 0 ? " is-invalid" : ""}
                                    type="text" 
                                    placeholder="Введите имя" 
                                    onChange={(e)=> { changeHandler(e)}}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.name}
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* Surname */}
                            <Form.Group className="mx-3" controlId="formGroupLastname">
                                <Form.Label>Фамилия</Form.Label>
                                <Form.Control
                                    required
                                    initialvalue={formFields.lastName}
                                    type="text"
                                    name="lastName"
                                    className={formErrors.lastName.length > 0 ? " is-invalid" : ""}
                                    placeholder="Введите фамилию" 
                                    onChange={(e)=> { changeHandler(e)}}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.lastName}
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* Id */}
                            <Form.Group className="mx-3" controlId="formGroupId">
                                <Form.Label>Id</Form.Label>
                                <Form.Control 
                                    required
                                    initialvalue={formFields.id}
                                    name="id"
                                    className={formErrors.id.length > 0 ? " is-invalid" : ""}
                                    type="text" 
                                    placeholder="Введите Id"
                                    onChange={(e)=> { changeHandler(e)}}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.id}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        {/* Email */}
                        <Form.Row>
                            <Form.Group className="mx-3" controlId="formGroupEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    initialvalue={formFields.email}
                                    name="email"
                                    className={formErrors.email.length > 0 ? " is-invalid" : ""}
                                    type="email" 
                                    placeholder="Введите email"
                                    onChange={(e)=> { changeHandler(e)}}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            {/* Phone */}
                            <Form.Group className="mx-3" controlId="formGroupPhone">
                                <Form.Label>Телефон</Form.Label>
                                <Form.Control
                                    required
                                    initialvalue={formFields.phone}
                                    name="phone"
                                    className={formErrors.phone.length > 0 ? " is-invalid" : ""}
                                    type="text" 
                                    placeholder="Введите телефон"
                                    onChange={(e)=> { changeHandler(e)}}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {formErrors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row className="text-center">
                            <Button 
                                variant="success" 
                                className="mx-3" 
                                type="submit"
                                disabled={!isFormReady}
                            >
                                Сохранить пользователя
                            </Button>
                            <Button onClick={() => { showUserAddFormToggle() }} variant="primary">Отмена</Button>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>  
    );
}

AddUserForm.propTypes = {
    showUserAddFormToggle:PropTypes.func,
    handleSort: PropTypes.func,
}

AddUserForm.defaultProps = {
    showUserAddFormToggle: () => {},
    handleAddNewUser: () => {},
}

export default AddUserForm;