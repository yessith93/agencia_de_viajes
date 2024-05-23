import Testimonios_list from "./Testimonios_list";
function Testimonios_row(props) {
    const testimonios = props.testimonios;
    console.log(testimonios);
    return (<div className="container">
        <h2 className="mt-5 text-center">Testimoniales</h2>
        <div className="row">
            <Testimonios_list testimonios={testimonios} />
        </div>
    </div>);
}

export default Testimonios_row;