import React from 'react';

const Task = ({ name }) => {
    return (
        <li className='TaskList__Task'>{name}</li>
    );
};

export default Task;