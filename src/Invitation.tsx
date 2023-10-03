import React from 'react';
import './App.css';
import { Guest } from './guests';

function Invitation(guest: Guest) {
    return (
        <div className="Invitation">
            <h2 className='accent'>
                <i>Welcome dear <b>{guest.displayName}</b>!</i>
            </h2>
            <p>
                Save the date
            </p>
            <h3 className='accent'>
                25 November 2023
            </h3>
            {guest?.isKafana ? <p>Rakija+(dra)matichno@<a href={'https://mk.wikipedia.org/wiki/%D0%9A%D0%B0%D1%84%D0%B5%D0%B0%D0%BD%D0%B0'}>kafana[TBD]</a> - <b className='accent'>14:00</b> h</p> : null}
            <p>Zhurka@<a href={'https://maps.app.goo.gl/2fh6s33rabbvTAsB6'}>Groovelyn</a> - <b className='accent'>19:00</b> h</p>
        </div>
    );
}

export default Invitation;
