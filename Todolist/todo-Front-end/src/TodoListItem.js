import React from 'react';

export const TodoListItem = ({ todo, onClickComplete, onClickDelete }) => (
    <div>
        <h3>{todo.text}</h3>
        {todo.isCompleted ? <p>Completed!!!</p> : null}
        <button
            onClick={() => onClickComplete(todo.text)}
        >Mark as Complete</button>
        <button
            onClick={() => onClickDelete(todo.text)}
        >Delete</button>
    </div>
);