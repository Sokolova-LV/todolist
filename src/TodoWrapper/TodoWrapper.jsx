import { useState, useEffect } from 'react';
import { TodoForm } from '../TodoForm/TodoForm';
import { Todo } from '../Todo/Todo';
import { Container, Title } from './TodoWrapper.styled';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from '../EditTodoForm/EditTodoForm';
uuidv4();

/* export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }])
        console.log(todos);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
        <Container>
            <Title>GET THINGS DONE!</Title>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo} />
                )
            ))}
        </Container>
    );
}; */

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
        setLoading(false); 
    }, []);
    
    useEffect(() => {
        if (!loading) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos, loading]);


    const addTodo = todo => {
        const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false }
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const toggleComplete = id => {
        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        );
    };

    const deleteTodo = id => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    const editTodo = id => {
        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
        );
    };

    const editTask = (task, id) => {
        setTodos(prevTodos =>
            prevTodos.map(todo => (todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
        );
    };

    return (
        <Container>
            <Title>GET THINGS DONE!</Title>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (
                    <EditTodoForm editTodo={editTask} task={todo} />
                ) : (
                    <Todo task={todo} key={index}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo} />
                )
            ))}
        </Container>
    );
}; 