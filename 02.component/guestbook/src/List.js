import React from 'react';
import ListItem from './ListItem';
import styles from './assets/css/List.css'

const List = ({ guestbooks }) => {
    return (
        <ul className={ styles.Guestbook__List }>
            {guestbooks.map((guestbook)=><ListItem key={guestbook.no} guestbooks={guestbook}/>)}
        </ul>
    );
};

export default List;