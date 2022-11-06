import {useState} from 'react'
import {useRouter} from 'next/router'

const EventList = ({eventList}) => {
  const [events, setevents] = useState(eventList)
  const router = useRouter()

  const fetchSportsEvents = async () => {
    const response = await fetch(`http://localhost:4000/events?category=sports`)
    const data = await response.json()
    setevents(data)
    router.push(`/events?category=sports`, undefined, {shallow: true})
  }
  return (
    <>
      <h1>List of Events</h1>
      <button onClick={fetchSportsEvents}>Sports Events</button>
      {events.map(event => {
        return (
          <div key={event.id}>
            <h2>
              {event.id} {event.title}
              {event.data}| {event.category}
            </h2>
            <p>{event.description}</p>
          </div>
        )
      })}
    </>
  )
}
export default EventList

export const getServerSideProps = async ({query}) => {
  const {category} = query

  const queryString = category ? 'category=sports' : ''

  const response = await fetch(`http://localhost:4000/events?${queryString}`)
  const data = await response.json()
  return {
    props: {
      eventList: data,
    },
  }
}
