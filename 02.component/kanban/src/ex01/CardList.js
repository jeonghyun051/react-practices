import React from 'react';
import Card from './Card';

const CardList = ({ title, cards }) => {
    return (
        <div className="CardList">
            <h1>{title}</h1>
            {cards.map((card)=> <Card 
                                    key={card.no} 
                                    title={card.title} 
                                    description={card.description} 
                                    tasks={card.tasks}/>)}
        </div>
    );
};

export default CardList;