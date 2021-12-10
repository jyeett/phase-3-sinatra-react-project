import './App.css';
import React, { useEffect, useState } from "react";
import {Route, Switch} from "react-router-dom"
import EventHome from './EventHome';
import MyEvent from './MyEvent';

function App() {
  const [events, setEvents] = useState([])
  const [currEvent, setCurrEvent] = useState()

  useEffect(() => {
      fetch('http://localhost:9292/events')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <EventHome events={events} setEvents={setEvents} setCurrEvent={setCurrEvent} />
        </Route>
        <Route exact path="/myevent">
          <MyEvent currEvent={currEvent} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
