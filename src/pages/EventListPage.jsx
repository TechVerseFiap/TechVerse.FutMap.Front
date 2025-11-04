import { useEffect, useState } from "react";
import { getUser } from "../hooks/useAuth";
import MyEventsList from "../components/EventList";
import EmptyState from "../components/EmptyEvent";

export default function MyEventsPage() {
  const urlApi = import.meta.env.VITE_API_URL;
  const user = getUser();
  const [userEvents, setUserEvents] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [userEventsRes, eventsRes] = await Promise.all([
        fetch(`${urlApi}/userEvents?userId=${user.id}`),
        fetch(`${urlApi}/events`)
      ]);

      const userEventsJson = await userEventsRes.json();
      const eventsJson = await eventsRes.json();

      setUserEvents(userEventsJson);
      setEvents(eventsJson);
    }

    fetchData();
  }, []);

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
    <div className="bg-(--bg-white-color) min-h-screen flex flex-col pt-20 px-5">
      <div className="w-full mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Meus Eventos</h1>
        <p className="text-gray-500 text-sm">
          Veja os eventos em que você está inscrito
        </p>
      </div>

      {joinedEvents.length > 0 ? (
        <MyEventsList events={joinedEvents} onLeaveEvent={handleLeaveEvent} />
      ) : (
        <EmptyState
          message="Você ainda não se inscreveu em nenhum evento."
        />
      )}
    </div>
  );
}
