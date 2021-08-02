import React from 'react';
import {PropTypes} from 'prop-types';
import ListItem from './ListItem';
import styles from './assets/css/List.css'

export default function List({ guestbooks }) {
    return (
        <ul className={ styles.Guestbook__List }>
            {guestbooks.map((guestbook)=><ListItem key={guestbook.no} guestbooks={guestbook}/>)}
        </ul>
    );
};

List.propTypes = {
    guestbooks: PropTypes.arrayOf(PropTypes.object).isRequired
}