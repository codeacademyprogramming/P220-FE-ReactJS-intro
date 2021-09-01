import React from 'react';
import { Spinner, Alert, Button } from 'react-bootstrap';
import { CounterContext, UsersContext } from "../../contexts";

export const Footer = () => {
    const { users, isLoading, error } = React.useContext(UsersContext);
    const { count, setCount } = React.useContext(CounterContext);

    return (
        <div>
            {isLoading && <Spinner animation="border" variant="danger" />}
            {error && <Alert variant="danger">{error.message}</Alert>}
            <h1>{users[0]?.firstname}</h1>
            <Button
                variant="warning"
                onClick={() => setCount(count + 1)}
            >
                Increment counter {count}
            </Button>
        </div>
    );
}
