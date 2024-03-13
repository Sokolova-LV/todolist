import { useState } from 'react';
import { Btn, Container, Form, Input } from './EditTodoForm.styled';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        editTodo(value, task.id);

        setValue("");
    }
    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Input type='text' value={value} placeholder='Update Task' onChange={(e) => setValue(e.target.value)}/>
                <Btn type='submit'>
                    Update Task
                </Btn>
            </Form>
        </Container>
    );
};