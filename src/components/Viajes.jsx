import Travel_cards from "./subcomponents/travel_cards";
function Viajes(props) {
    let pagina="Proximos viajes"
    const {viajes} = props.data
    return (
        <>
            <h1 className="mt-5 text-center">{pagina}</h1>
            <main className="container mt-5">
                <Travel_cards viajes={viajes}/>
            </main>

        </>
    );
}

export default Viajes;