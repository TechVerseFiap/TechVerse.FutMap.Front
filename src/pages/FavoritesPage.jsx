import NewsCard from "../components/NewsCard";
import { useUserNews } from "../hooks/useUserNews";

export default function FavoritePage() {
  const { news, userNews, toggleFavorite, loading, error } = useUserNews();

  if (loading)
    return (
      <div className="p-4 text-center min-h-screen">
        Carregando favoritos...
      </div>
    );
  if (error) return <div className="p-4 text-center text-red-600">{error}</div>;

  const favorites = news.filter((n) =>
    userNews.some((un) => Number(un.newsId) === Number(n.newsId))
  );

  return (
    <div className="min-h-screen bg-white p-5">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {favorites.length > 0 ? (
          favorites.map((item) => {
            return (
              <NewsCard
                key={item.id}
                id={item.newsId ?? item.id}
                image={item.image}
                title={item.title}
                desc={item.desc}
                date={item.date}
                onCLick={toggleFavorite}
                isFlagged={true}
              />
            );
          })
        ) : (
          <p className="text-center col-span-full text-gray-500">
            Nenhuma notícia favoritada ainda.
          </p>
        )}
      </div>
    </div>
  );
}
