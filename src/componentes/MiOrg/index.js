import { useState } from 'react'
import './MiOrg.css'

const MiOrg = (props) => {

console.log(props)
//const [mostrar, actualizarMostrar] = useState(true)
//const manejarClick = () => {
//        console.log('Mostrar/Ocultar elemento', !mostrar)
//        actualizarMostrar(!mostrar)
//    }

    return <section className="orgSection">
        <h3 className='title'>Mi organización</h3>
        <img src="/img/agregar.png" alt="agregar" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg