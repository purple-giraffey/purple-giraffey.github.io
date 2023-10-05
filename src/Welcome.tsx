import React from 'react';
import logo from './assets/lunar-tear-loading.png';

import './App.css';
import './Stars.css';

function Welcome(props: { onEnter: CallableFunction, isGuest: boolean }) {
    return (
        <div className="Welcome">
            <div className="bg-animation">
                <div id="stars"></div>
                <div id="stars2"></div>
                <div id="stars3"></div>
                <div id="stars4"></div>
            </div>
            <img src={logo} alt="lunar-tear" className="App-logo" />
            {props.isGuest ? <a className='enter-btn' onClick={() => props.onEnter()}> ⋆ Enter ⋆ </a> : null}
        </div>
    );
}

export default Welcome;
