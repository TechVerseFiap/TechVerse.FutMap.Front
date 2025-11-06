import MyEventsList from "../components/EventList";
import EmptyState from "../components/EmptyEvent";
import { useUserEvents } from "../hooks/useUserEvents";

export default function EventListPage() {
  const { joinedEvents, leaveEvent, loading, error } = useUserEvents();

  if (loading) {
    return <div className="p-4 text-center min-h-screen bg-white">Carregando eventos...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-600">Erro: {error}</div>;
  }

 return (
    <div className="min-h-screen bg-white p-5">
      {joinedEvents.length > 0 ? (
        <MyEventsList events={joinedEvents} onLeaveEvent={leaveEvent} />
      ) : (
        <EmptyState message="Você ainda não se inscreveu em nenhum evento." />
      )}
    </div>
  );
}
