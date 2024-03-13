import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Container } from './Todo.styled';

export const Todo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
    return (
        <Container>
            <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : 'incompleted'}`}>{task.task}</p>
            <div>
                <FontAwesomeIcon className='edit-icon' icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
                <FontAwesomeIcon className='delete-icon' icon={faTrash} onClick={() => deleteTodo(task.id)} />
            </div>
        </Container>
    );
};