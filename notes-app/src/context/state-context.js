import React from 'react';

const users = [{email : "test@test.com"}]
const StateContext = React.createContext({
    token : "Bearer myToken",
    users : users
})

export default StateContext;