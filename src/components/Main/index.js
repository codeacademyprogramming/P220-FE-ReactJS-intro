import React from 'react';
import { Container } from "react-bootstrap"
import { CounterContext, UsersContext } from '../../contexts';
import { Button } from "../Button"

export const Main = ({ number, number2 }) => {
    const userContext = React.useContext(UsersContext);
    const { count } = React.useContext(CounterContext);
    const starCount = React.useMemo(() => {
        return `${Math.round(number / 20)} stars`;
    }, [number]);

    return (
        <main>
            <Container>
                <div className="wrapper">
                    <div>
                        <h1>{count} Flowers are more beautiful when you buy from us</h1>
                        <h1>You, {userContext.users[1]?.firstname} gave us {starCount}</h1>
                        <Button
                            variant="primary"
                            href="/products"
                        >Buy now</Button>
                    </div>
                </div>
            </Container>
        </main>
    )
}
