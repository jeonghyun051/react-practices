import React from 'react';

const ListItem = ({ guestbooks }) => {
    return ( 
        <li className={"Guestbook__List__Item"}>
            <strong>{guestbooks.name}</strong>
            <p>
                {guestbooks.message}
            </p>
            <strong></strong>
            <a href=''>삭제</a>
        </li>

    );
};

export default ListItem;