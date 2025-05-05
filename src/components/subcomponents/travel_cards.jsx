import Card_viaje from "./card_viaje";

function card_viajes(props) {
    return (
        <div className="row proximos-viajes">
        {
            props.viajes.map((viaje) =>
                <Card_viaje viaje={viaje} key={viaje.id} />
            )
        }
    </div>

    );
}

export default card_viajes;