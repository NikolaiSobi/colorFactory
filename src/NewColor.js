import React from "react";
import { useNavigate } from "react-router-dom";

export const NewColor = ( {addColorFn} ) => { 
    const navigate = useNavigate()

    const handleClick = () => {
        let colorName = document.getElementById('color').value
        addColorFn(colorName)
        navigate('/colors')
    }
    return (
        <div>
            <h1>Add a new color</h1>
            
                <label htmlFor="color">Color name </label>
                <input type="text" name="color" id="color" placeholder="Enter name of color"></input>
                <button onClick={() => handleClick()}>Add color</button>
            
        </div>
    )
}