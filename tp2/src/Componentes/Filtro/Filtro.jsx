import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons'
import './Filtro.css'

const Filtro = (props) => {
    return (
        <>
            <ul className='resultados'>
                <li>{props.usuario.nombre} {props.usuario.apellido}</li>
                <li><FontAwesomeIcon className='fa-mobile' icon={faMobile} /> {props.usuario.celular}</li>
            </ul>
        </>
    )
}

export { Filtro }