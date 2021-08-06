import React, {useRef} from 'react';

const NewTodo : React.FC<{onAddItem : (value : string)=> void}> = (props) => {
    const todoInputRef = useRef<HTMLInputElement>(null)
    const submitHandler = (event : React.FormEvent) => {
        event.preventDefault();
        const value : string = todoInputRef.current!.value;
        props.onAddItem(value)
    }
    return (
        <div>
            <form onSubmit= {submitHandler}>
                <input type="text" ref={todoInputRef}/>
                <button type="submit">Add Item</button>

            </form>
        </div>
    );
}

export default NewTodo;
