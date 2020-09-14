import React from 'react';
import {Card, Form} from 'react-bootstrap';
 
export default ({choisedUser})=>{
    return(
        <>
            <Card
                bg={'light'}
                key={'idx'}
                style={{ width: '24rem' }}
                className="mb-2 mx-auto"
            >
                <Card.Body>
                    <Card.Text>
                        Выбран пользователь <b>{`${choisedUser.firstName} ${choisedUser.lastName}`}</b><br/>
                        Описание:
                        <Form.Control defaultValue={choisedUser.description} as="textarea" rows="3" />
                        Адрес проживания:<b>{choisedUser.address.streetAddress}</b><br/>
                        Город:<b>{choisedUser.address.city}</b><br/>
                        Провинция/штат: <b>{choisedUser.address.state}</b><br/>
                        Индекс: <b>{choisedUser.address.zip}</b>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};