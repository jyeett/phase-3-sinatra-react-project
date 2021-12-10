import {useHistory} from "react-router"

function EventCard({event, deleteEvent, setCurrEvent, image, title, time, details}) {
    const history = useHistory()

    function handleClick() {
        console.log(event)
        setCurrEvent(event.id)
        history.push('/myevent')
    }

    function handleDelete() {
        deleteEvent(event.id)
    }

    return (
        <div className='event-card'>
            <button className='delete-btn' onClick={handleDelete}>X</button>
            <div onClick={handleClick}>
                <img className="event-img" src={image} alt='event'/>
                <div>
                    <h3>{title}</h3>
                    <h4>{time}</h4>
                    <p>{details}</p>
                </div>
            </div>
        </div>
    )
}

export default EventCard