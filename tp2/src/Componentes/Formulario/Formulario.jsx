import React from 'react';
import './Formulario.css'

const Formulario = (props) => {

    return (
        <>
            <form id='miFormulario' onSubmit={props.guardarBoton}>
                <div className='titulo-formulario'>
                    <h2>Nuevo contacto</h2>
                    <div className='formulario1'>
                        <div className='datos-iniciales'>
                            <input type="text" placeholder="Ingresar nombre" required onChange={(e) => props.formNombre(e.target.value)} />
                            <input type="text" placeholder="Ingresar apellido" required onChange={(e) => props.formApellido(e.target.value)} />
                        </div>
                        <div className='datos-medios'>
                            <input type="number" placeholder="Ingresar celular" required onChange={(e) => props.formCelular(e.target.value)} />
                            <input type="email" placeholder="Ingresar correo electronico" required onChange={(e) => props.formCorreo(e.target.value)} />
                        </div>
                        <div className='datos-finales'>
                            <input type="text" placeholder="Ingresar direccion" required onChange={(e) => props.formDireccion(e.target.value)} />
                            <input type="number" placeholder="Numero" required onChange={(e) => props.formNumero(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='boton1'>
                    <button className='guardar'>Agregar contacto</button>
                </div>
            </form>
        </>

    )
}
export { Formulario }
