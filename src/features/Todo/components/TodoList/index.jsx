import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todoList: PropTypes.array
};
TodoList.defaultProps = {
    todoList: []
}

function TodoList({todoList}) {
    // co the viet ben duoi neu co nhieu prop
    // const todoList = { props }
    
    return (
        <ul>
            {todoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;