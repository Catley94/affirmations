import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Header.css';
const Header = () => {

    return (
        <div className="Header">
        <span className="linkTitles">
        <Link to={'/'}>Affirmations</Link>
        </span>
        <span className="linkTitles">
        <Link to={'/about'}>About</Link>
        </span>
        </div>
        
    )
}

export default Header;