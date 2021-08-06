import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from "../../store/actions/counter.actions";
import * as resultActions from "../../store/actions/result.actions";

import "./Counter.css";

const Counter = (props) => {
    // const addHandler = () => { props.onAdd(5) }
    // console.log("Props - ", props);
    return (
        <div className="container">
            <h4>Counter : {props.counter} </h4>
            <button className="btn btn-primary" 
                onClick={props.onIncrease}>Increase</button>
            <button className="btn btn-warning" 
                onClick={props.onDecrease}>Decrease</button>
            <button className="btn btn-secondary" 
                onClick={()=>props.onAdd(5)}>Add(5)</button>
            <button className="btn btn-secondary" 
                onClick={()=>props.onAsyncAdd(10)}>Async Add(10)</button>
            <button className="btn btn-dark" 
                onClick={() => props.onSubtract(8)}>Subtract(8)</button>
                <br/><hr/>
            <button className="btn btn-danger btn-lg"
                onClick={() =>props.onStoreResult(props.counter)}>Store Result</button>
            <br/>
            <ul className="list-group">
            {props.result.map((item, index) => {
                return <li onClick={() => props.onDeleteResult(index)} className="list-group-item" key={index}>{item}</li>}
                )}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter : state.ctr.counter,
        result : state.res.result
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease : () => dispatch({type : counterActions.INCREMENT}),
        onDecrease : () => dispatch({type : counterActions.DECREMENT}),
        onAdd : (value) => dispatch(counterActions.onAddNumber(value)),
        onSubtract : value => dispatch(counterActions.onSubtractNumber(value)),
        onStoreResult : ctr => dispatch(resultActions.onStoreResult(ctr)),
        onDeleteResult : idx => dispatch(resultActions.onDeleteResult(idx)),
        onAsyncAdd : value => dispatch(counterActions.asyncAddNumber(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);

// const connectedComp = connect(mapStateToProps, mapDispatchToProps)

// export default connectedComp(Counter);
