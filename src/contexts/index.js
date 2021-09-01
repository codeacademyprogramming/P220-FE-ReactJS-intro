import React from 'react';

export const UsersContext = React.createContext({
    users: null,
    isLoading: true,
    error: null
});

export const UserProvider = ({ children }) => {
    const [users, setUsers] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(
        () => {
            fetch('http://localhost:3333/users', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then(res => {
                return res.json();
            }).then((res) => {
                if (res.data) {
                    setUsers(res.data);
                } else {
                    setError(res);
                }
            }).finally(() => {
                setIsLoading(false);
            });
        },
        []
    );
    return (
        <UsersContext.Provider value={{
            users,
            isLoading,
            error
        }}>
            {children}
        </UsersContext.Provider>
    )
};

export const CounterContext = React.createContext({
    count: 0,
    setCount: null
});

export const CounterProvider = ({ children }) => {
    const [count, setCount] = React.useState(0);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    )
}
