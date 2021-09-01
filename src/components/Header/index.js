import React from 'react';
import { CounterContext } from '../../contexts';
import { Button } from "../Button";
import "./index.css";

export const Header = ({ children }) => {
    const { count } = React.useContext(CounterContext);
    return (
        <header>
            <nav>
                <ul className="d-flex align-items-center">
                    <li>
                        <a href="/">{children}</a>
                    </li>
                    <li>
                        <a href="/home">Home {count}</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    <li>
                        <a href="/faq">FAQ</a>
                    </li>
                    <li>
                        <Button variant="primary" href="/login" user={{ firstname: 'Samir', lastname: 'Dadash', age: 30, hasBachelorDegree: true }}>
                            Login
                        </Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}