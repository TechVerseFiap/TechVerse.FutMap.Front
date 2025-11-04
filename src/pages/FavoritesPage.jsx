import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getUser } from "../hooks/useAuth";
import NewsCard from "../components/NewsCard";
import Toolbar from "../components/ToolBar";

export default function FavoritePage() {
  const urlApi = import.meta.env.VITE_API_URL;
  const user = getUser();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    async function loadFavorites() {
      setLoading(true);
      setError(null);
      try {
        
        const resUserNews = await fetch(`${urlApi}/userNews?userId=${user.id}`);
        if (!resUserNews.ok) throw new Error("Erro ao buscar favoritos do usuário");
        const userNews = await resUserNews.json(); 


        const resNews = await fetch(`${urlApi}/news`);
        if (!resNews.ok) throw new Error("Erro ao buscar notícias");
        const allNews = await resNews.json(); 

        const newsByNewsId = new Map();
        allNews.forEach((n) => {
          newsByNewsId.set(Number(n.newsId ?? n.id), n);
        });

        const combined = userNews.map((un) => {
          const news = newsByNewsId.get(Number(un.newsId)) ?? null;
          return { ...un, news };
        });

        if (mounted) {
          setFavorites(combined);
        }
      } catch (err) {
        console.error(err);
        if (mounted) setError(err.message || "Erro desconhecido");
      } finally {
        if (mounted) setLoading(false);
      }
    }

    loadFavorites();

    return () => {
      mounted = false;
    };
  }, [urlApi, user.id]);

  async function toggleFavoriteNews(newsId) {
    const alreadySaved = favorites.some((f) => Number(f.newsId) === Number(newsId) && String(f.userId) === String(user.id));

    try {
      if (alreadySaved) {
        const userNews = favorites.find((f) => Number(f.newsId) === Number(newsId) && String(f.userId) === String(user.id));
        if (!userNews) return;
        const res = await fetch(`${urlApi}/userNews/${userNews.id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Erro ao remover favorito");
        setFavorites((prev) => prev.filter((f) => f.id !== userNews.id));
      } else {
        const newUserNews = { newsId: Number(newsId), userId: String(user.id) };
        const res = await fetch(`${urlApi}/userNews`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUserNews),
        });
        if (!res.ok) throw new Error("Erro ao salvar favorito");
        const created = await res.json();

        let newsData = null;
        try {
          const resNews = await fetch(`${urlApi}/news?newsId=${newsId}`);
          if (resNews.ok) {
            const arr = await resNews.json();
            newsData = arr[0] ?? null;
          }
        } catch (err) {
          console.warn("Falha ao buscar news depois do POST:", err);
        }

        setFavorites((prev) => [...prev, { ...created, news: newsData }]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) {
    return (
      <>
        <div className="p-4 text-center min-h-screen bg-white">Carregando favoritos...</div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="p-4 text-center text-red-600">Erro: {error}</div>
      </>
    );
  }

  return (
    <div className="min-h-screen bg-white p-5">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.length > 0 ? (
          favorites.map((item) => {
            const news = item.news;
            if (!news) {
              return (
                <div key={item.id} className="p-4 rounded shadow bg-white">
                  <p>Notícia não encontrada (id: {String(item.newsId)})</p>
                </div>
              );
            }

            return (
              <NewsCard
                key={item.id}
                id={news.newsId ?? news.id}
                image={news.image}
                title={news.title}
                desc={news.desc}
                date={news.date}
                onCLick={toggleFavoriteNews}
                isFlagged={true}
              />
            );
          })
        ) : (
          <p className="text-center col-span-full text-gray-500">Nenhuma notícia favoritada ainda.</p>
        )}
      </div>
    </div>
  );
}
