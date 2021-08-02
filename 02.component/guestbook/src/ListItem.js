import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';
import styles from './assets/scss/ListItem.scss'

export default function ListItem({ guestbooks }){
    return ( 
        <li className={ styles.Guestbook__List__Item }>
            <strong>{guestbooks.name}</strong>
            <p>
                {guestbooks.message && guestbooks.message.split('\n').map((line, index) => index > 0 ?
                    <Fragment key={index}>
                        <br/>
                        { line }
                    </Fragment> : line) }
            </p>
            <strong></strong>
            <a href=''>삭제</a>
        </li>

    );
};

ListItem.propTypes = {
    guestbooks: PropTypes.object.isRequired
}