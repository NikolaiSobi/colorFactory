import React from "react";
import './ColorList.css'
import { useNavigate } from "react-router-dom";

export const ColorList = ({ colorArr }) => {
    let colors = colorArr
    const navigate = useNavigate()

    const changeColor = (event) => {
      event.target.style.color = event.target.id
    }
    const restoreColor = (event) => {
        event.target.style.color = 'black'
      }
    return (
        <div>
            <div className="color-factory">
                <h1>Color Factory</h1>
                <h2 id="create-color" onClick={() => navigate(`new`)}>Add a color</h2>
            </div>

            <div className="colors">
                {colors.map((color) => <h2  onMouseEnter={changeColor} onMouseLeave={restoreColor} id={color} onClick={() => navigate(`${color}`)}> {color} </h2>)}
            </div>
        </div>
        
        
    )
}