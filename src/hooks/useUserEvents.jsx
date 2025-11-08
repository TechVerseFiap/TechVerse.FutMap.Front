import { useEffect, useState } from "react";
import { getUser } from "../hooks/useAuth";
import { apiGet, apiPost, apiDelete } from "../services/apiService";

export function useUserEvents() {
  const urlApi = import.meta.env.VITE_API_URL;
  const user = getUser();
  const [events, setEvents] = useState([]);
  const [userEvents, setUserEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      setError(null);
      try {
        const [allEvents, userJoined] = await Promise.all([
          apiGet(`${urlApi}/events`),
          apiGet(`${urlApi}/userEvents?userId=${user.id}`)
        ]);
        if (mounted) {
          setEvents(allEvents);
          setUserEvents(userJoined);
        }
      } catch (err) {
        console.error("Erro ao buscar eventos:", err);
        if (mounted) setError(err.message || "Erro ao carregar eventos");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => { mounted = false; };
  }, [urlApi, user.id]);

  async function joinEvent(eventId) {
    const alreadyJoined = userEvents.some(ue => ue.eventId === eventId);
    try {
      if (alreadyJoined) {
        const target = userEvents.find(ue => ue.eventId === eventId);
        if (!target) return;
        await apiDelete(`${urlApi}/userEvents/${target.id}`);
        setUserEvents(prev => prev.filter(ue => ue.id !== target.id));
      } else {
        const newUserEvent = { eventId, userId: user.id };
        const created = await apiPost(`${urlApi}/userEvents`, newUserEvent);
        setUserEvents(prev => [...prev, created]);
      }
    } catch (err) {
      console.error("Erro ao entrar/sair do evento:", err);
    }
  }

  async function leaveEvent(eventId) {
    try {
      const userEvent = userEvents.find(
        ue => ue.eventId === eventId && ue.userId === user.id
      );
      if (!userEvent) return;
      await apiDelete(`${urlApi}/userEvents/${userEvent.id}`);
      setUserEvents(prev => prev.filter(ue => ue.id !== userEvent.id));
    } catch (err) {
      console.error("Erro ao sair do evento:", err);
    }
  }

  const joinedEvents = events.filter(event =>
    userEvents.some(ue => ue.eventId === event.eventId)
  );

  return {
    events,
    userEvents,
    joinedEvents,
    joinEvent,
    leaveEvent,
    loading,
    error
  };
}
