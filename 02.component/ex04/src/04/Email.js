import React from 'react';
import PropTypes from 'prop-types';

const Email = ({ no, firstName, lastName, email }) => {
    return (
        <li>
            { `${ firstName } ${ lastName }` }
            <br/>
            { email }
        </li>
    );
};

export default Email;

Email.propTypes = {
    no: PropTypes.number,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}