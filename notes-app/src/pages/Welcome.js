import React from 'react';
import { Route, useHistory } from 'react-router-dom';

const Welcome = () => {
    const history = useHistory();
    const navigationHandler = () => {
        history.push("/products")
    }
    return (
        <div>
            <h3>Welcome Page</h3>
            <button onClick={navigationHandler}>Navigate</button>
            <Route path="/welcome/new-user" exact>
                <h5>New User Loaded</h5>
            </Route>
        </div>
    );
}

export default Welcome;

// /welcome
// /welcome/new-user