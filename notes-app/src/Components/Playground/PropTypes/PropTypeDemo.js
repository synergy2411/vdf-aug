import React from 'react';
import PropTypes from 'prop-types';

const PropTypeDemo = (props) => {
    return (
        <div>
            <p>Email : {props.email}</p>
            <p>Age : {props.age}</p>
        </div>
    );
}

PropTypeDemo.propTypes = {
    email : PropTypes.string.isRequired,
    age : PropTypes.number.isRequired,
    user : PropTypes.shape({
        firstName : PropTypes.string.isRequired,
        lastName : PropTypes.string
    }).isRequired
}

export default PropTypeDemo;
