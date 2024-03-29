import { useParams, Link, useNavigate } from "react-router-dom";
import './Color.css'
import { useEffect } from "react";

export const Color = ({ colors }) => {
    const navigate = useNavigate()
    const { color } = useParams()
    
    useEffect(() => {
        if(!colors.includes(color)) {
            navigate('/colors')
        }
    })

    return (
        <div className="colorDiv" style={{'background-color': color }}>
            <h1 className="text"> This is { color } </h1>
            <Link className="link" to={"/colors"} > Go back</Link>
        </div>
    )
}