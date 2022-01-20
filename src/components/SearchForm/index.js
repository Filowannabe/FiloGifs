import React, { useState } from "react";

function SearchForm({ onSubmit }) {
    const [keyword, setKeyword] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        onSubmit({ keyword })
    }

    const handleChange = (e) => { setKeyword(e.target.value) }

    return (<form id='input_container' onSubmit={handleSubmit}>
        <input id='home_input' type='text' placeholder="GIF..." onChange={handleChange} autoComplete="off"></input>
    </form>)
}

export default React.memo(SearchForm)