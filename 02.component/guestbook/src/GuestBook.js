import React from 'react';
import AddForm from './AddForm';
import List from './List';
import guestbooks from './data.json';

const GuestBook = () => {
    return (
        <div className="{Guestbook}">
            <h1>방명록</h1>
            <AddForm />
            <List key={guestbooks.no} guestbooks={guestbooks} />
        </div>
    );
};

export default GuestBook;