import React, {useState} from 'react';

const AddNewNote = () => {
    const [title, setTitle] = useState("")

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }
    return (
        <div className="row">
            <div className="col-sm-8 col-md-6 offset-sm-2 offset-md-3">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Title</label>
                                <input type="text" 
                                    name="title"
                                    value = {title}
                                    onChange = {titleChangeHandler}
                                    className="form-control"/>
                                    Modified Value - {title}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddNewNote;