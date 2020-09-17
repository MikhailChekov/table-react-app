import React from 'react';
import PropTypes from 'prop-types';
import {Card, Form} from 'react-bootstrap';
 
const UserInfo = ({choisedUser}) => {
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

UserInfo.propTypes = {
        choisedUser: PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            phone: PropTypes.string,
            email: PropTypes.string,
            description: PropTypes.string,
            address: PropTypes.objectOf(PropTypes.string),
    }).isRequired,
}
  
UserInfo.defaultProps = { }

export default UserInfo;