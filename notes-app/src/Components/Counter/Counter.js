import React from 'react';
import { connect } from 'react-redux';
import * as fromActions from '../../store/root.actions'

const Counter = (props) => {
    // const addHandler = () => { props.onAdd(5) }
    console.log("Props - ", props);
    return (
        <div className="container">
            <h4>Counter : {props.counter} </h4>
            <button className="btn btn-primary" 
                onClick={props.onIncrease}>Increase</button>
            <button className="btn btn-warning" 
                onClick={props.onDecrease}>Decrease</button>
            <button className="btn btn-secondary" 
                onClick={()=>props.onAdd(5)}>Add(5)</button>
            <button className="btn btn-dark" 
                onClick={() => props.onSubtract(8)}>Subtract(8)</button>
                <br/><hr/>
            <button className="btn btn-danger btn-lg"
                onClick={() =>props.onStoreResult(props.counter)}>Store Result</button>
            <br/>
            <ul className="list-group">
            {props.result.map((item, index) => {
                return <li className="list-group-item" key={index}>{item}</li>}
                )}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter : state.counter,
        result : state.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease : () => dispatch({type : fromActions.INCREMENT}),
        onDecrease : () => dispatch({type : fromActions.DECREMENT}),
        onAdd : (value) => dispatch(fromActions.onAddNumber(value)),
        onSubtract : value => dispatch(fromActions.onSubtractNumber(value)),
        onStoreResult : ctr => dispatch(fromActions.onStoreResult(ctr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);

// const connectedComp = connect(mapStateToProps, mapDispatchToProps)

// export default connectedComp(Counter);
