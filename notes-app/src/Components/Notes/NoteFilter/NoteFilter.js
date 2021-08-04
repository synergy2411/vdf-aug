const NoteFilter = props =>{
    const changeHandler = (event) => {
        props.onSelectYear(event.target.value)
    }
    return (
        <div>
            <select value={props.initialYear} onChange={changeHandler} className="form-control">
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
            </select>
        </div>
    )

}

export default NoteFilter;