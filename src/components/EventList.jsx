import CardEvent from "./CardEvent";

export default function MyEventsList({ events, onLeaveEvent }) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {events.map((event) => (
        <CardEvent
          key={event.eventId}
          eventId={event.eventId}
          image={event.image}
          title={event.title}
          description={event.description}
          date={event.date}
          distance={event.distance}
          time={event.time}
          people={event.people}
          type={event.type}
          joined={true}
          onJoin={() => onLeaveEvent(event.eventId)}
        />
      ))}
    </div>
  );
}
