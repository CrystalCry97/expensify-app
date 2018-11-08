// Higher order component (HOC) - a component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop Manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        {props.info}
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info, please dont share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ):(
                <p>Please login to view the info</p>
            )}
        </div>
    );
};

const AdminInfo= withAdminWarning(Info);
const AuthInfo= requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="These are the details"/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} />,document.getElementById('app'));