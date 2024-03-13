import { useState } from 'react';
import { Btn, Container, Form, Input } from './TodoForm.styled';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input type='text' value={value} placeholder='What is the task today?' onChange={(e) => setValue(e.target.value)}/>
                <Btn type='submit'>
                    Add Task
                </Btn>
            </Form>
        </Container>
    );
};