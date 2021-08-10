import React from 'react';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, onDeleteTodo, onCompleteTodo }) => (
    <div>
        {todos.map(todo =>(
            <TodoListItem
                onClickComplete={onCompleteTodo}
                onClickDelete={onDeleteTodo}
                todo={todo} />
        ))}
    </div>
);