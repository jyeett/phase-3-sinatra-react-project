import { useEffect, useState } from "react"
import EventCard from "./EventCard"

function EventHome({events, setCurrEvent, setEvents}) {
    const eventComps = events.map(event => <EventCard deleteEvent={deleteEvent} events={events} setEvents={setEvents} setCurrEvent={setCurrEvent} event={event} key={event.id + event.title} image={event.image} title={event.title} time={event.time} details={event.details}/>)
    const [formData, setFormData] = useState({
        title: '',
        time: '',
        image: '',
        details: '',
        user_id: 1
    })
    const [presenterForm, setPresenterForm] = useState({
        name: '',
        email: '',
        event_id: ''
    })

    function handleChange(e) {
        setFormData({...formData, [e.target.name] : e.target.value})
    }

    function handleChange2(e) {
        setPresenterForm({...presenterForm, [e.target.name] : e.target.value})
    }

    function deleteEvent(id) {
        const eventRemoved = events.filter(event => event.id !== id)
        setEvents(eventRemoved)
        fetch(`http://localhost:9292/events/${id}`, {
            method: 'DELETE',
            headers: {'Content-Type' : 'application/json'}
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/events', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
            // setPresenterForm({...presenterForm, ['event_id'] : data.id})
            sendPresenter(data.id)
        })
    }

    function sendPresenter(id) {
        presenterForm.event_id = id
        const form = presenterForm
        console.log(form)
        fetch('http://localhost:9292/presenters', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(form)
        })
        .then(res => res.json())
        .then(setEvents([...events, formData]))
    }

    return (
        <div className='page event-focus'>
            <h1 className='title'> MYVENT </h1>
            <div className='events-container'>
                {eventComps}
            </div>
            <form className='event-form' onSubmit={e => handleSubmit(e)}>
                <h3>Create New Event</h3>
                <input type='text' value={formData.title} placeholder='Title' name='title' onChange={e => handleChange(e)}></input>
                <input type='text' value={formData.time} placeholder='Time' name='time' onChange={e => handleChange(e)}></input>
                <input type='text' value={formData.image} placeholder='Image Url' name='image' onChange={e => handleChange(e)}></input>
                <input type='text' value={formData.details} placeholder='Details' name='details' onChange={e => handleChange(e)}></input>
                <input type='text' value={presenterForm.name} placeholder='Presenter Name' name='name' onChange={e => handleChange2(e)}></input>
                <input type='text' value={presenterForm.email} placeholder='Presenter Email' name='email' onChange={e => handleChange2(e)}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EventHome