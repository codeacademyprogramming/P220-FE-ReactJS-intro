import React from 'react';
import { ListGroup, Spinner, Alert } from 'react-bootstrap';
import { UsersContext } from '../../contexts';
// import { axiosInstance } from '../../api';


export const Users = () => {
    const { isLoading, users, error } = React.useContext(UsersContext);

    return (
        <ListGroup>
            {isLoading && <Spinner animation="border" variant="primary" />}
            {error && <Alert variant="danger">{error.message}</Alert>}
            {users && users.map(user => {
                return (
                    <ListGroup.Item key={user.id}>
                        {user.firstname} {user.lastname}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    )
}