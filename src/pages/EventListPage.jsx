import { useEffect, useState } from "react";
import { getUser } from "../hooks/useAuth";
import MyEventsList from "../components/EventList";
import EmptyState from "../components/EmptyEvent";

export default function EventListPage() {
  const urlApi = import.meta.env.VITE_API_URL;
  const user = getUser();
  const [userEvents, setUserEvents] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [userEventsRes, eventsRes] = await Promise.all([
        fetch(`${urlApi}/userEvents?userId=${user.id}`),
        fetch(`${urlApi}/events`),
      ]);

      const userEventsJson = await userEventsRes.json();
      const eventsJson = await eventsRes.json();

      setUserEvents(userEventsJson);
      setEvents(eventsJson);
    }

    fetchData();
  }, [urlApi, user.id]);

  const joinedEvents = events.filter((event) =>
    userEvents.some((ue) => ue.eventId === event.eventId)
  );

  async function handleLeaveEvent(eventId) {
    const userEvent = userEvents.find(
      (ue) => ue.eventId === eventId && ue.userId === user.id
    );

    if (userEvent) {
      await fetch(`${urlApi}/userEvents/${userEvent.id}`, { method: "DELETE" });
      setUserEvents((prev) => prev.filter((ue) => ue.id !== userEvent.id));
    }
  }

  return (
    <div className="min-h-screen bg-white p-5">
      {joinedEvents.length > 0 ? (
        <MyEventsList events={joinedEvents} onLeaveEvent={handleLeaveEvent} />
      ) : (
        <EmptyState message="Você ainda não se inscreveu em nenhum evento." />
      )}
    </div>
  );
}
