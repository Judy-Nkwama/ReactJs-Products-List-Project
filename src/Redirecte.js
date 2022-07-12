import React from 'react'; 
import { useNavigate } from 'react-router-dom';
import {useEffect} from "react";

const Redirecte = props => {
    
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/products");
    });

    return(<>Redirecting...</>);
}
export default Redirecte;