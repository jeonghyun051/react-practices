import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styles from '../assets/css/CardList.css';

export default function CardList({ title, cards }) {
    return (
        <div className={ styles.CardList }>
            <h1>{title}</h1>
            { cards.map(card => <Card
                                    key={ card.no }
                                    title={ card.title }
                                    description={ card.description }
                                    status={ card.status }
                                    tasks={ card.tasks } />) }
        </div>
    );
}

CardList.propTypes = {
    title: PropTypes.string.isRequired, // 꼭 들어와야함
    cards: PropTypes.arrayOf(PropTypes.object).isRequired 
}