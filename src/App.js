import "./app.css";
import React from 'react';
import Container from 'react-bootstrap/Container';
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import logo from './assets/logo.png';
import { Form } from "react-bootstrap";
import { Users } from "./components/Users";
import { Footer } from "./components/Footer";
import { CounterProvider, UserProvider } from './contexts';

export const App = () => {
    const [number, setNumber] = React.useState('');
    const [number2, setNumber2] = React.useState('');

    return (
        <CounterProvider>
            <UserProvider>
                <Container>
                    <Header>
                        <img src={logo} width="50" height="50" alt="This is our websites logo" />
                    </Header>
                </Container>
                <Main number={number} number2={number2} />
                <Container className="d-none">
                    <Form.Label>Number</Form.Label>
                    <Form.Control
                        onChange={e => {
                            setNumber(e.target.value);
                        }}
                        value={number}
                        placeholder="Enter a number between 1 and 100"
                    />
                    <Form.Control
                        onChange={e => {
                            setNumber2(e.target.value);
                        }}
                        value={number2}
                        placeholder="Enter a number between 1 and 100 input 2"
                    />
                </Container>
                <Container>
                    <Users />
                    <Footer />
                </Container>
            </UserProvider>
        </CounterProvider>
    )
};