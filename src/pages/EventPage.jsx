import { useEffect, useState } from "react";
import CardEvent from "../components/CardEvent";
import NewsCard from "../components/NewsCard";
import { getUser } from "../hooks/useAuth";
import { apiGet, apiPost, apiDelete } from "../services/apiService";
import { useUserNews } from "../hooks/useUserNews";

export default function EventPage() {
    const urlApi = import.meta.env.VITE_API_URL;
  const user = getUser();
  const [events, setEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  const { news, userNews, toggleFavorite } = useUserNews();

  useEffect(() => {
    Promise.all([
      apiGet(`${urlApi}/events`),
      apiGet(`${urlApi}/userEvents?userId=${user.id}`)
    ]).then(([eventsData, userEventsData]) => {
      setEvents(eventsData);
      setUserEvents(userEventsData);
    });
  }, [urlApi, user.id]);

  async function joinEvent(eventId) {
    const joined = userEvents.some(ue => ue.eventId === eventId);
    if (joined) {
      const target = userEvents.find(ue => ue.eventId === eventId);
      await apiDelete(`${urlApi}/userEvents/${target.id}`);
      setUserEvents(prev => prev.filter(ue => ue.id !== target.id));
    } else {
      const newEvent = { eventId, userId: user.id };
      const created = await apiPost(`${urlApi}/userEvents`, newEvent);
      setUserEvents(prev => [...prev, created]);
    }
  }

  return (
    <div className="bg-(--bg-white-color) min-h-screen flex flex-col pt-20 px-5">
      <div className="w-full py-2">
        <p className="font-semibold">Eventos</p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => {
          const isJoined = userEvents.some((ue) => ue.eventId === event.eventId);
          return (
            <CardEvent
              key={index}
              eventId={event.eventId}
              image={event.image}
              title={event.title}
              description={event.description}
              date={event.date}
              distance={event.distance}
              time={event.time}
              people={event.people}
              onJoin={joinEvent}
              type={event.type}
              joined={isJoined}
            />
          );
        })}
      </div>

      <div className="w-full py-2">
        <p className="font-semibold">Notícias do futebol feminino</p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((item, index) => {
          const isSaved = userNews.some((un) => un.newsId === item.newsId);
          console.log(`Notica ${item.newsId}:  ${isSaved}`)
          return (
            <NewsCard
              key={index}
              id={item.newsId}
              image={item.image}
              title={item.title}
              desc={item.desc}
              date={item.date}
              onCLick={toggleFavorite}
              isFlagged={isSaved}
            />
          );
        })}
      </div>

      <div className="mb-30"></div>
    </div>
  );
}
