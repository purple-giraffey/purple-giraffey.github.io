import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';

import './App.css';
import { ReactComponent as MuteIcon } from './assets/mute.svg'
import { ReactComponent as PlayIcon } from './assets/play.svg'

import { Guest } from './guests';
import Menu from './Menu';

const SHOW_MENU = false

function Invitation(props: { guest: Guest, audio: any }) {
    const [isMenuView, setMenuView] = useState(false);
    const [isAudioOn, setAudio] = useState(false)

    function toggleAudio() {
        if (isAudioOn) {
            props.audio.pause()
            setAudio(false)
        } else {
            props.audio.play()
            setAudio(true)
        }
    }

    useEffect(() => {
        toggleAudio()
    }, []);

    function exitMenu() { setMenuView(false) }

    return (
        isMenuView && SHOW_MENU ? <Menu goBack={() => exitMenu()} /> :
            <div className="Invitation">
                {isAudioOn ?
                    <button className='mute-btn' onClick={() => toggleAudio()}><MuteIcon /></button>
                    : <button className='mute-btn' onClick={() => toggleAudio()}><PlayIcon /></button>}

                <FadeIn transitionDuration={800} delay={500}>
                    <div className='invitation-frame'>
                        <div className='invitation-body'>
                            <p>Welcome, dear <b className='accent'>{props.guest.displayName}</b>!</p>
                            <p>
                                Save the date:
                            </p>
                            <h3 className='accent'>
                                25 November 2023
                            </h3>
                            <p>
                                We are thrilled to invite you to our wedding celebration. This is the plan:
                            </p>
                            <div>
                                {props.guest?.isKafana ? <p><b className='accent'>14:00 </b>Ruchek & matichno @<a href={'https://mk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%84%D0%B5%D0%B0%D0%BD%D0%B0'}>kafana[TBA]</a></p> : null}
                                {props.guest?.isZhurka ? <p><b className='accent'>19:00 </b>Zhurka @<a href={'https://maps.app.goo.gl/2fh6s33rabbvTAsB6'}>Groovelyn</a>{SHOW_MENU && "*"}</p> : null}
                            </div>
                            <p>See you there!</p>
                            <h3 className='accent'>♡</h3>
                            <p>Marina & Nikola</p>
                            {props.guest.isZhurka && SHOW_MENU ? <p className='menu-link'>* <a onClick={() => setMenuView(true)}>View drinks menu</a></p>
                                : null}
                        </div>
                    </div>
                </FadeIn >
            </div >
    );
}

export default Invitation;
