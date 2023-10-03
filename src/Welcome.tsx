import React from 'react';
import logo from './assets/lunar-tear-loading.png';

import './App.css';

function Welcome(props: { onEnter: CallableFunction, isGuest: boolean }) {
    return (
        <div className="Welcome">
            {props.isGuest ? <button onClick={() => props.onEnter()}>Enter</button> : null}
            <img src={logo} alt="lunar-tear" className="App-logo" />
        </div>
    );
}

export default Welcome;
