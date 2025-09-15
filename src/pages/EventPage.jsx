import CardEvent from "../components/CardEvent"

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

export default function EventPage() {
    return (
        <div className="bg-(--bg-white-color) min-h-screen flex flex-col pt-20 px-5">
            <p className="font-semibold">Eventos</p>
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
            <div className="mb-30"></div>
        </div>
    );
}