const noteDate = (props) => {
    const month = props.noteDate.toLocaleString("en-US", { month : "long" })
    const day = props.noteDate.toLocaleString("en-US", {day : "2-digit"})
    const year = props.noteDate.getFullYear();

    return (
        <p>Created At : <br/>
        <span className="text-muted">{`${month} ${day}, ${year}`}</span></p>
    )
}

export default noteDate;