import React, { useRef } from "react";

function InputUsingUseRef() {
    const nameInputRef = useRef(null);
    const optionNameRef = useRef(null);
    function handleSubmit(event) {
        event.preventDefault();
        console.log(nameInputRef.current.value + optionNameRef.current.value);
    }
    function handleChange(event) {
        console.log(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" ref={nameInputRef} />
            <br />
            <select ref={optionNameRef} onChange={handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="Mango">Mango</option>
            </select>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}

export default InputUsingUseRef;
