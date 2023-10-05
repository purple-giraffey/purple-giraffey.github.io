import React, { useEffect, useState } from 'react';
import './App.css';
import { Guest, getGuest } from './guests';
import Invitation from './Invitation';
import Welcome from './Welcome';

function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const guestId = queryParams.get("guest_id")

  const [guest, setGuest] = useState(null as Guest | null)
  const [audio, _] = useState(new Audio(require('./assets/celebrate.mp3')))

  useEffect(() => {
    async function fetchGuest() {
      const guest = await getGuest(guestId)
      setGuest(guest);
    };
    fetchGuest()
  }, [guestId]);

  const [hasEntered, setEnter] = useState(false);



  return (
    <div className="App">
      <header className="App-header">

        {!hasEntered ?
          <Welcome isGuest={guest ? true : false} onEnter={() => { setEnter(true); audio.play() }} />
          : <>{guest ? <Invitation guest={guest} audio={audio} /> : null}</>

        }

      </header>
    </div>
  );
}

export default App;
