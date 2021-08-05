import React from 'react';
import Email from './Email';

const Emaillist = ({ emails }) => {
    return (
        <ul className= { "Emaillist" }>
            {
                emails.map(item =>         
                    <Email 
                        key= { item.no }
                        firstName = { item.firstName }
                        lastName = { item.lastName }
                        email = { item.email }
                    />
                )
            }
        </ul>
    );
};

export default Emaillist;