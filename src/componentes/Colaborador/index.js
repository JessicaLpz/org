import './Colaborador.css'
import {AiOutlineUserDelete, AiFillHeart, AiOutlineHeart} from 'react-icons/ai'

const Colaborador = (props) =>{
    const {nombre,puesto,foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props
    
// condicion ? verdadero : falso (tenorio)
    
    return <div className='colaborador'>
        <AiOutlineUserDelete className='eliminar' onClick={() => eliminarColaborador(id)}/>
        <div className='encabezado' style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre} />
        </div>
        <div className='info'>
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <AiFillHeart color='#C70039' onClick={() => like(id)}/> : <AiOutlineHeart onClick={() => like(id)}/>}
        </div>
    </div>
}

export default Colaborador