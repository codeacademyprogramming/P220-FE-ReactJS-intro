import React from 'react';
import { Container } from "react-bootstrap"
import { Button } from "../Button"

export const Main = ({ number, number2 }) => {
    const starCount = React.useMemo(() => {
        console.log('salam dunya');
        return `${Math.round(number / 20)} ulduz`;
    }, [number]);

    return (
        <main>
            <Container>
                <div className="wrapper">
                    <div>
                        <h1>Flowers are more beautiful when you buy from us</h1>
                        <h1>You gave us {starCount}</h1>
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
