import React, { Component } from 'react';
import PowerAffirmations from './Conscious/PowerAffirmations/PowerAffirmations';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from '../About/About';

const AllAffirmations = () => {
    return (
        <div className="subLinkTitles">
            <h3>Welcome to Affirmations!</h3>
            <p>Please choose from one of the following:</p>
            <Link to={'/Conscious'}>Conscious</Link>
            <br/>
            <Link to={'/Subconscious'}>Subconscious</Link>
            <br/>
            <Link to={'/About'}>What's the difference?</Link>
        </div>
    )
}

export default AllAffirmations;