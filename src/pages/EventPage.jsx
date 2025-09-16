import CardEvent from "../components/CardEvent"
import NewsCard from "../components/NewsCard";

const events = [
    {
        image: "https://conteudo.imguol.com.br/c/esporte/d3/2025/09/07/cruzeiro-e-corinthians-ficaram-no-empate-na-primeira-final-do-brasileirao-feminino-em-belo-horizonte-1757260579540_v2_900x506.jpg",
        title: "Torneio jovem",
        description: "Academia de esportes",
        date: "Amanhã",
        distance: "2.3Km",
        time: "10:00h",
        people: "23",
        onJoin: () => {},
        type: "tournament"
    },
    {
        image: "https://assets.propmark.com.br/uploads/2025/03/472984321_18153546538343800_8892969051646898317_n.jpg",
        title: "Torneio jovem",
        description: "Academia de esportes",
        date: "Amanhã",
        distance: "2.3Km",
        time: "10:00h",
        people: "23",
        onJoin: () => { },
        type: "sieve"
    }
]

const news = [
    {
        image: "https://jogamiga.com.br/wp-content/uploads/2020/01/sinclair1.jpg",
        title: "Seleção Feminina da Inglaterra vence Eurocopa",
        desc: "Vitória histórica traz o título para casa após décadas",
        date: "2025-09-15T13:00:00Z",
    },
    {
        image: "https://dt5602vnjxv0c.cloudfront.net/portals/11778/images/opening%20day%202018/img_1619resize.jpeg",
        title: "Lançamento do Programa de Desenvolvimento Juvenil",
        desc: "Nova iniciativa para apoiar jovens jogadoras",
        date: "2025-09-15T13:00:00Z",
    },
    {
        image: "https://pbs.twimg.com/media/GPKHmF2W8AA4kg4.jpg",
        title: "Destaques da Temporada da WSL",
        desc: "Melhores momentos das partidas desta temporada",
        date: "2025-09-15T13:00:00Z",
    },
]

export default function EventPage() {
    return (
        <div className="bg-(--bg-white-color) min-h-screen flex flex-col pt-20 px-5">
            <div className="w-full max-w-sm mx-auto">
                <p className="font-semibold max-w-sm w-full mx-auto">Eventos</p>
            </div>
            {events.map((event, index) => (
                <CardEvent
                    key={index}
                    image={ event.image }
                    title={ event.title }
                    description={event.description }
                    date={event.date }
                    distance={event.distance }
                    time={ event.time }
                    people={ event.people }
                    onJoin={ event.onJoin }
                    type={ event.type }
                />
            ))}
            <div className="w-full max-w-sm mx-auto">
               <p className="font-semibold">Noticias do futebol feminino</p>
            </div>
            {news.map((item, index) => (
                <NewsCard
                    key={index}
                    image={item.image}
                    title={item.title}
                    desc={item.desc}
                    date={item.date}
                />
            ))}
            <div className="mb-30"></div>
        </div>
    );
}