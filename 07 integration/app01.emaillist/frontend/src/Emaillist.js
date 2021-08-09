import React from 'react';
import Email from './Email';
import PropTypes from 'prop-types';

const Emaillist = ({ keyword, emails }) => {
    return (
        <ul className= { "Emaillist" }>
            {   
                emails
                    .filter(item=> item.firstName.indexOf(keyword) !== -1 || item.lastName.indexOf(keyword) !== -1)  // firstName에 키워드가 들어있다.
                    .map(item =>         
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

Emaillist.propTypes = {
    email: PropTypes.arrayOf(PropTypes.shape(Email.propTypes))
}