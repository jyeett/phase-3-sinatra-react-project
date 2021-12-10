import { useEffect, useState } from "react"

function MyEvent({currEvent}) {
    const [showEvent, setShowEvent] = useState({})
    console.log(currEvent)
    useEffect(() => {
        fetch(`http://localhost:9292/events/${currEvent}`)
        .then(res => res.json())
        .then(data => setShowEvent(data))
    },[])
    // console.log(showEvent)
    return Object.keys(showEvent).length > 0 ?
        <div className='page'>
            <h1 className='title'> {showEvent.title} </h1>
            <div className='logistics'>
                <div className='logs details-cont'>
                    <h2>Event Details</h2>
                    <h3>Presented By: {showEvent.presenter.name}</h3>
                    <h3>Time: {showEvent.time}</h3>
                    <h4>{showEvent.details}</h4>
                    <h5>Contact: {showEvent.presenter.email}</h5>

                </div>
                <div className='logs participant-cont'>
                    <h2>Participants</h2>
                </div>
            </div>
        </div> : 
        null
}

export default MyEvent