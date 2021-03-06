import React, {useState} from 'react';

const AddNewNote = (props) => {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState(0)
    const [createdAt, setCreatedAt] = useState("")
    // const [state, setState] = useState({
    //     title : "",
    //     amount : 0,
    //     createdAt : ""
    // })

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setState({
        //     ...state,
        //     title : event.target.value
        // })
    }
    const amountChangeHandler = event =>{
        setAmount(event.target.value);
    }
    const createdAtChangeHandler = event =>{
        setCreatedAt(event.target.value)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        props.onNewNote({title, amount, createdAt : new Date(createdAt)})
        setTitle("")
        setAmount("")
        setCreatedAt("")
        // props.onNewNote(...state)
    }
    return (
        <div className="row">
            <div className="col-sm-8 col-md-6 offset-sm-2 offset-md-3">
                <div className="card">
                    <div className="card-header">
                        <h4 className="text-center">Add New Note</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit = {submitHandler}>
                        {/* Title */}
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" 
                                    name="title"
                                    value = {title}
                                    onChange = {titleChangeHandler}
                                    className="form-control"/>
                            </div>
                            {/* Amount */}
                            <div className="form-group">
                                <label>Amount</label>
                                <input type="number" 
                                    name="amount"
                                    value = {amount}
                                    onChange = {amountChangeHandler}
                                    className="form-control"/>
                            </div>
                            {/* Created At */}
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date" 
                                    name="date"
                                    value = {createdAt}
                                    onChange = {createdAtChangeHandler}
                                    className="form-control"/>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-sm-6 col-md-6">
                                        <input type="submit" className="btn btn-secondary btn-block"/>
                                    </div>
                                    <div className="col-sm-6 col-md-6">
                                        <button 
                                            onClick={props.onCancel}
                                            className="btn btn-warning btn-block">Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddNewNote;