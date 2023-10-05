import React from 'react';
import FadeIn from 'react-fade-in';

import './App.css';
import { ReactComponent as MuteIcon } from './assets/mute.svg'
import { Guest } from './guests';

function Invitation(props: { guest: Guest, audio: any }) {
    return (
        <div className="Invitation">
            <button className='mute-btn' onClick={() => props.audio.pause()}><MuteIcon /></button>
            <FadeIn transitionDuration={800} delay={500}>
                <div className='invitation-frame'>
                    <p>Welcome, dear <b>{props.guest.displayName}</b>!</p>
                    <p>
                        Save the date:
                    </p>
                    <h3 className='accent'>
                        25 November 2023
                    </h3>
                    <p>
                        We are thrilled to invite you to our wedding celebration. This is the plan:
                    </p>
                    {props.guest?.isKafana ? <p>Rakija+(dra)matichno@<a href={'https://mk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%84%D0%B5%D0%B0%D0%BD%D0%B0'}>kafana[TBD]</a> - <b className='accent'>14:00</b> h</p> : null}
                    <p>Zhurka@<a href={'https://maps.app.goo.gl/2fh6s33rabbvTAsB6'}>Groovelyn</a> - <b className='accent'>19:00</b> h</p>
                    <p>See you there!</p>
                    <p>♡</p>
                    <p>Marina & Nikola</p>
                </div>
            </FadeIn>
        </div>
    );
}

export default Invitation;
