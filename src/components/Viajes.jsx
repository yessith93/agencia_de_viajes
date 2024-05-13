import Card_viaje from "./card_viaje";
function Viajes(props) {
    let pagina="Proximos viajes"
    return (
        <>
            <h1 className="mt-5 text-center">{pagina}</h1>
            <main className="container mt-5">
                <div className="row proximos-viajes">
                    {
                        props.viajes.map((viaje) =>
                            <Card_viaje viaje={viaje} key={viaje.id} />
                        )
                    }
                </div>
            </main>

        </>
    );
}

export default Viajes;