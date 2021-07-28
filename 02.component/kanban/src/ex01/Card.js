import React from 'react';
import TaskList from './TaskList';

const Card = ({ title, description, tasks }) => {
    return (
        <div className='Card'>
          <div className='Card__Title'>{ title }</div>
          <div className='Card__Details'>
            { description }
            <TaskList tasks={ tasks }/>
            </div>
        </div>
    );
};

export default Card;