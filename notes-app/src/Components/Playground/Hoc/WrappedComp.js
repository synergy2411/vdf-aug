import React from 'react';
import WrapperComp from './WrapperComp';

const WrappedComp = (props) => {
    console.log("Wrapped Comp ", props)
    return (
        <div>
            Email : { props.user.email }
        </div>
    );
}

export default WrapperComp(WrappedComp);

// export default connect(Comp)
