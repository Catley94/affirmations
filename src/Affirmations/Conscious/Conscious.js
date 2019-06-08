import React, { Component } from 'react';
import PowerAffirmations from './PowerAffirmations/PowerAffirmations';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Conscious = () => {
    return (
        <div className="subLinkTitles">
            <Link to={'/PowerAffirmations'}>Empowering Affirmations</Link>
        </div>
    )
}

export default Conscious;