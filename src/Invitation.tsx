import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';

import './App.css';
import { ReactComponent as MuteIcon } from './assets/mute.svg'
import { ReactComponent as PlayIcon } from './assets/play.svg'

import { Guest } from './guests';
import Menu from './Menu';
import { MENU_TYPE } from './Menu'

const SHOW_MENU_ZHURKA = true
const SHOW_MENU_KAFANA = true

const WEDDING_ENDED = true


function Invitation(props: { guest: Guest, audio: any }) {
    const [isMenuView, setMenuView] = useState<MENU_TYPE | null>(null);
    const [isAudioOn, setAudio] = useState(false)
    const [isOriginalInvitation, setOriginalInvitation] = useState(!WEDDING_ENDED)

    function toggleAudio() {
        if (isAudioOn) {
            props.audio.pause()
            setAudio(false)
        } else {
            props.audio.play()
            setAudio(true)
        }
    }

    function toggleOriginalInvite() {
        setOriginalInvitation(!isOriginalInvitation)
    }

    useEffect(() => {
        toggleAudio()
    }, []);

    function exitMenu() { setMenuView(null) }

    const addToCalendarLink = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NnBoNmFkaGw2NWo2NmI5bGNoajZhYjlrYzRzajRiOW82MWlqOGI5aDZwZ21jY3BqNjVpbWFjcjZjNCA2YjE2NzAyZmJiZWM2MGVlMTdiYjU2NDc2MWI2Nzc0OWNkODI2YWQ1MGEyOTkyZjBiNTk0OTc4MGZmNzg4ZTA3QGc&tmsrc=6b16702fbbec60ee17bb564761b67749cd826ad50a2992f0b5949780ff788e07%40group.calendar.google.com"

    return (
        isMenuView === MENU_TYPE.ZHURKA && SHOW_MENU_ZHURKA ? <Menu goBack={() => exitMenu()} menu={MENU_TYPE.ZHURKA} /> :
            isMenuView === MENU_TYPE.KAFANA && SHOW_MENU_KAFANA ? <Menu goBack={() => exitMenu()} menu={MENU_TYPE.KAFANA} /> :
                <div className="Invitation">
                    {isAudioOn ?
                        <button className='mute-btn' onClick={() => toggleAudio()}><MuteIcon /></button>
                        : <button className='mute-btn' onClick={() => toggleAudio()}><PlayIcon /></button>}

                    <FadeIn transitionDuration={800} delay={500}>
                        <div className='invitation-frame'>
                            <div className='invitation-body'>
                                {WEDDING_ENDED && isOriginalInvitation ? <p className='menu-link'>← <a onClick={() => toggleOriginalInvite()}>Go back</a></p> : null}
                                <p>Welcome, dear <b className='accent'>{props.guest.displayName}</b>!</p>
                                {!isOriginalInvitation ?
                                    <div>
                                        <i className='accent'>
                                            <b>
                                                Thank you for attending, we hope you enjoyed the celebration as much as we did!
                                            </b>
                                        </i>
                                        <h3 className='accent'>♡</h3>
                                        <div className='album-text'>
                                            <div>
                                                Here's a link to the <a href={props.guest.photo_album ?? ''}>photo album</a>,
                                                where you can upload your photos of the wedding
                                                and treat yourself with photos that other guests uploaded *
                                            </div>
                                            <div className='menu-link' style={{ 'margin': '3em 0em 0em 0em' }}>
                                                * official photos TBD in the same album in 1-2 weeks after the wedding
                                            </div>
                                        </div>
                                        <p className='menu-link'><a onClick={() => toggleOriginalInvite()}>See original invitation →</a></p>
                                    </div>
                                    :
                                    <div>
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
                                            {props.guest?.isKafana ? <p><b className='accent'>14:30 </b>Ruchek & matichno @<a href={'https://maps.app.goo.gl/dsZ5KbYikZnW1Mvf8'}>Lira</a>{SHOW_MENU_KAFANA && "*"} </p> : null}
                                            {props.guest?.isZhurka ?
                                                <p><b className='accent'>19:00 </b>Zhurka @<a href={'https://maps.app.goo.gl/2fh6s33rabbvTAsB6'}>Groovelyn</a>{SHOW_MENU_ZHURKA && "*"} <a target="_blank" href={addToCalendarLink}><img className={'calendar-img'} width={'20em'} height={'20em'} src={require('./assets/calendar.png')} alt={'Add to Google Calendar'} /></a>
                                                </p> : null}
                                        </div>
                                        <p>See you there!</p>
                                        <h3 className='accent'>♡</h3>
                                        <p>Marina & Nikola</p>
                                        {props.guest.isKafana && SHOW_MENU_KAFANA ? <p className='menu-link'>* <a onClick={() => setMenuView(MENU_TYPE.KAFANA)}>View drinks menu (Lira)</a></p>
                                            : null}
                                        {props.guest.isZhurka && SHOW_MENU_ZHURKA ? <p className='menu-link'>* <a onClick={() => setMenuView(MENU_TYPE.ZHURKA)}>View drinks menu (Groovelyn)</a></p>
                                            : null}
                                    </div>}
                            </div>
                        </div>
                    </FadeIn >
                </div >
    );
}

export default Invitation;
