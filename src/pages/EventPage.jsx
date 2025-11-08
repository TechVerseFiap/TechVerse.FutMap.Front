import CardEvent from "../components/CardEvent";
import NewsCard from "../components/NewsCard";
import { useUserNews } from "../hooks/useUserNews";
import { useUserEvents } from "../hooks/useUserEvents";

export default function EventPage() {
  const { events, userEvents, joinEvent, loading, error } = useUserEvents();
  const { news, userNews, toggleFavorite } = useUserNews();

  if (loading) return <div className="text-center p-5">Carregando eventos...</div>;
  if (error) return <div className="text-center text-red-600 p-5">{error}</div>;

  return (
    <div className="bg-(--bg-white-color) min-h-screen flex flex-col pt-20 px-5">
      <div className="w-full py-2">
        <p className="font-semibold">Eventos</p>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, index) => {
          const isJoined = userEvents.some(ue => ue.eventId === event.eventId);
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
          console.log(`Notica ${item.newsId}:  ${isSaved}`);
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
