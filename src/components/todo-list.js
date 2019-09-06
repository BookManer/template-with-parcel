// React
import React from 'react';
import TodoItem from './todo-item.js';

// Styles
import { List } from 'semantic-ui-css/semantic.min.css'

export default (props) => {
    const {items} = props;

    return (
        <div class="ui list task-list">
            {items.map((task, index) => (
                <TodoItem key={task.id}
                          id={index}
                          content={task.text}
                          done={task.done}
                          categories={task.categories} />
            ))}
        </div>
    )
}