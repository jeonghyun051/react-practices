import React, { Fragment } from 'react';
import styles from './assets/scss/ListItem.scss'

const ListItem = ({ guestbooks }) => {
    return ( 
        <li className={ styles.Guestbook__List__Item }>
            <strong>{guestbooks.name}</strong>
            <p>
                {guestbooks.message && guestbooks.message.split('\n').map((line, index) => index > 0 ?
                    <Fragment>
                        <br/>
                        { line }
                    </Fragment> : line) }
            </p>
            <strong></strong>
            <a href=''>삭제</a>
        </li>

    );
};

export default ListItem;