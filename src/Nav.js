import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

export const Nav = () => {
    const navigate = useNavigate()
    useEffect(() => {
        navigate("/colors")
    })
    
}