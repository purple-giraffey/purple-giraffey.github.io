import React, { useEffect, useState } from 'react';
import './App.css';
import { Guest, getGuest } from './guests';
import Invitation from './Invitation';
import Welcome from './Welcome';

function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const guestId = queryParams.get("guest_id")

  const [guest, setGuest] = useState(null as Guest | null)

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
          <Welcome isGuest={guest ? true : false} onEnter={() => setEnter(true)} />
          : <>{guest ? <Invitation {...guest} /> : null}</>

        }

      </header>
    </div>
  );
}

export default App;
