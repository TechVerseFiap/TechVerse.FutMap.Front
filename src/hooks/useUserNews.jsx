import { useEffect, useState } from "react";
import { getUser } from "./useAuth";
import { apiGet, apiPost, apiDelete } from "../services/apiService";

export function useUserNews() {
  const urlApi = import.meta.env.VITE_API_URL;
  const user = getUser();
  const [news, setNews] = useState([]);
  const [userNews, setUserNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    async function load() {
      setLoading(true);
      try {
        const [newsRes, userNewsRes] = await Promise.all([
          apiGet(`${urlApi}/news`),
          apiGet(`${urlApi}/userNews?userId=${user.id}`)
        ]);
        if (mounted) {
          setNews(newsRes);
          setUserNews(userNewsRes);
        }
      } catch (err) {
        if (mounted) setError(err.message || "Erro ao carregar notícias");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => { mounted = false; };
  }, [urlApi, user.id]);

  async function toggleFavorite(newsId) {
    const alreadySaved = userNews.some(un => Number(un.newsId) === Number(newsId));

    try {
      if (alreadySaved) {
        const target = userNews.find(un => Number(un.newsId) === Number(newsId));
        if (!target) return;
        await apiDelete(`${urlApi}/userNews/${target.id}`);
        setUserNews(prev => prev.filter(un => un.id !== target.id));
      } else {
        const newUserNews = { newsId: Number(newsId), userId: user.id };
        const created = await apiPost(`${urlApi}/userNews`, newUserNews);
        setUserNews(prev => [...prev, created]);
      }
    } catch (err) {
      console.error("Erro ao alternar favorito:", err);
    }
  }

  return { news, userNews, toggleFavorite, loading, error };
}
