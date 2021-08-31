import { useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ListGroup, ListGroupItem, FormControl, FormGroup, FormLabel, Button, Badge } from "react-bootstrap";
import "./app.css";

function App() {
    const ref = useRef(null);
    const [todos, setTodos] = useState([
        {
            id: uuidv4(),
            title: 'Do homework',
            isCompleted: true
        },
        {
            id: uuidv4(),
            title: 'Do some exercise',
            isCompleted: false
        },
        {
            id: uuidv4(),
            title: 'Learn react',
            isCompleted: true
        }
    ]);
    const [currentlyEditingTodoId, setCurrentlyEditingTodoId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (currentlyEditingTodoId) {
            const updatedTodos = todos.map(todo => {
                if (todo.id === currentlyEditingTodoId) {
                    return { ...todo, title: ref.current.value }
                } else {
                    return todo;
                }
            });
            setTodos(updatedTodos);
            ref.current.value = '';
            setCurrentlyEditingTodoId('');
            return;
        }
        if (!ref.current.value) {
            alert('You should enter a value before submitting');
            return;
        }
        const newTodo = {
            id: uuidv4(),
            title: ref.current.value,
            isCompleted: false
        };
        const updatedTodos = [...todos, newTodo];
        setTodos(updatedTodos);
        ref.current.value = '';
    }

    const handleDelete = (id) => {
        const areYouSure = window.confirm('Are you sure?');
        if (areYouSure) {
            const updatedTodos = todos.filter(todo => todo.id !== id);
            setTodos(updatedTodos);
        }
    }

    const handleStatusChange = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, isCompleted: !todo.isCompleted }
            } else {
                return todo;
            }
        });
        setTodos(updatedTodos);
    }

    const handleEdit = (id) => {
        const foundTodo = todos.find(todo => todo.id === id);
        ref.current.value = foundTodo.title;
        setCurrentlyEditingTodoId(foundTodo.id);
    }


    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <FormGroup className="mb-3">
                    <FormLabel>Todo title</FormLabel>
                    <FormControl type="text" placeholder="Enter a todo" ref={ref} />
                    <Button type="submit" variant="primary" className="mt-3" >{currentlyEditingTodoId ? 'Update' : 'Add'}</Button>
                </FormGroup>
            </form>
            <ListGroup>
                {todos.map((todo) => {
                    return (
                        <ListGroupItem className="d-flex justify-content-between align-items-center">
                            <div>
                                <span className="idSpan"># {todo.id}</span>
                                <b>{todo.title}</b>
                                <Badge bg={todo.isCompleted ? 'success' : 'danger'} className="ms-3">{todo.isCompleted ? 'Done' : 'In progress'}</Badge>
                            </div>
                            <div>
                                <Button
                                    onClick={() => {
                                        handleEdit(todo.id);
                                    }}
                                    variant="warning"
                                    className="me-3"
                                >
                                    Edit
                                </Button>
                                <Button
                                    onClick={() => {
                                        handleDelete(todo.id);
                                    }}
                                    variant="danger"
                                    className="me-3"
                                >
                                    Delete
                                </Button>
                                <Button
                                    onClick={() => {
                                        handleStatusChange(todo.id);
                                    }}
                                    variant="info"
                                >
                                    {todo.isCompleted ? 'Move to in progress' : 'Move to done'}
                                </Button>
                            </div>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
        </div>
    )
};

export default App;
