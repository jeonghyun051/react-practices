import React from 'react';
import ListItem from './ListItem';

const List = ({ guestbooks }) => {
    return (
        <ul className={"Guestbook__List"}>
            {guestbooks.map((guestbook)=><ListItem key={guestbook.no} guestbooks={guestbook}/>)}
        </ul>
    );
};

export default List;