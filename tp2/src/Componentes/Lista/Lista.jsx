import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import './Lista.css'

const Lista = (props) => { 

    return (
        <>
            <ul className='lista-contacto'>
                <li className='id'>{props.id + 1}</li>
                <div className='datos-contacto'>
                    <li className='nombre'>{props.list.nombre} {props.list.apellido}</li>
                </div>
                <div>
                    <li><FontAwesomeIcon className='fa-mobile' icon={faMobile} /> {props.list.celular}</li>
                    <li><FontAwesomeIcon className='fa-envelope' icon={faEnvelope} /> {props.list.correo}</li>
                    <li><FontAwesomeIcon className='fa-locationPin' icon={faLocationPin} /> {props.list.direccion} {props.list.numero}</li>
                </div>
                <div className='boton'>
                    <button className='eliminar' type='button' onClick={() => props.botonEliminar(props.id)}>Eliminar</button>
                </div>
            </ul>
        </>
    )
}

export { Lista }