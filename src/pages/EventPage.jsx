import { useEffect, useState } from "react";
import CardEvent from "../components/CardEvent";
import NewsCard from "../components/NewsCard";
import { getUser } from "../hooks/useAuth";

export default function EventPage() {
  const urlApi = import.meta.env.VITE_API_URL;
  const user = getUser();
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  const [userNews, setUserNews] = useState([]); 

  useEffect(() => {
    fetch(`${urlApi}/events`)
      .then((data) => data.json())
      .then((json) => setEvents(json));

    fetch(`${urlApi}/news`)
      .then((data) => data.json())
      .then((json) => setNews(json));

    fetch(`${urlApi}/userEvents?userId=${user.id}`)
      .then((data) => data.json())
      .then((json) => setUserEvents(json));

    fetch(`${urlApi}/userNews?userId=${user.id}`)
      .then((data) => data.json())
      .then((json) => setUserNews(json));
  }, []);

  async function joinEvent(eventId) {
    const alreadyJoined = userEvents.some((ue) => ue.eventId === eventId);

    if (alreadyJoined) {
      const userEvent = userEvents.find(
        (ue) => ue.eventId === eventId && ue.userId === user.id
      );

      if (userEvent) {
        await fetch(`${urlApi}/userEvents/${userEvent.id}`, { method: "DELETE" });
        setUserEvents((prev) => prev.filter((ue) => ue.id !== userEvent.id));
      }
    } else {
      const newUserEvent = { eventId, userId: user.id };
      const response = await fetch(`${urlApi}/userEvents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserEvent),
      });
      const data = await response.json();
      setUserEvents((prev) => [...prev, data]);
    }
  }

  async function toggleFavoriteNews(newsId) {
    const alreadySaved = userNews.some((un) => un.newsId === newsId);

    if (alreadySaved) {
      const userNew = userNews.find(
        (un) => un.newsId === newsId && un.userId === user.id
      );

      if (userNew) {
        await fetch(`${urlApi}/userNews/${userNew.id}`, { method: "DELETE" });
        setUserNews((prev) => prev.filter((un) => un.id !== userNew.id));
      }
    } else {
      const newUserNews = { newsId, userId: user.id };
      const response = await fetch(`${urlApi}/userNews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUserNews),
      });
      const data = await response.json();
      setUserNews((prev) => [...prev, data]);
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
              onCLick={toggleFavoriteNews}
              isFlagged={isSaved}
            />
          );
        })}
      </div>

      <div className="mb-30"></div>
    </div>
  );
}
