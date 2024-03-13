import React, { useState, useEffect } from 'react'
import './App.css'
import { Formulario } from './Componentes/Formulario/Formulario';
import { Filtro } from './Componentes/Filtro/Filtro';
import { Lista } from './Componentes/Lista/Lista';
import Agenda from './assets/Agenda.png';

function App() {

    //Evita que los datos se pierdan
    const obtenerRegistros = () => {                            //Funcion para que los registros queden guardados cada vez que se cierre o actualice la pagina
        var datos = localStorage.getItem("registros");          
        if (datos) {
            return JSON.parse(datos);                           //Recupera los datos
        } else {
            return [];
        }
    }

    const [registros, setRegistros] = useState(obtenerRegistros());   //array que contiene todos los datos
    const [search, setSearch] = useState('');                         //array que se utilizara para filtrar contacto

    const [nombre, setNombre] = useState("");                         //Variables de los datos a introducir
    const [apellido, setApellido] = useState("");
    const [celular, setCelular] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [numero, setNumero] = useState("");

    //Guardar contacto
    const botonGuardar = (e) => {                                    // funcion para guardar los datos al precionar el boton
        e.preventDefault();                                          //Evita que la pagina recargue
        const miObjepto = { nombre, apellido, celular, correo, direccion, numero }        //se captura la estructura de los datos del formulario
        setRegistros([...registros, miObjepto]);           //se guarda en los arreglos
        limpiarFormulario();                              //limpia el contenido
        alert('Tu contacto a sido guardado con exito');    // mensaje de confirmacion del contacto guardado
    }

    //limpia el formulario
    const limpiarFormulario = () => {                   
        setNombre("");
        setApellido("");
        setCelular("");
        setCorreo("");
        setDireccion("");
        setNumero("");
        document.getElementById("miFormulario").reset();  //resetea el formulario
    }

    //Guarda los cambios
    useEffect(() => {                                   //cuando se detecten cambios en registros los guarda en el localStorage
        localStorage.setItem("registros", JSON.stringify(registros));
    }, [registros]);


    //Eliminar contacto
    const botonEliminar = (miIndex) => {                            //funcion para eliminar un contacto
        var registrosFiltrados = registros.filter((e, index) => {       
            return miIndex !== index;                                 //recupero todos los datos excepto el que se selecciono para eliminar  
        });
        setRegistros(registrosFiltrados);
    };

    //Buscar contacto
    const searchNombres = () => {                   //Funcion para buscar contacto
        return registros.filter(registro => registro.nombre.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))  //filtra los registros por el nombre, los pasa a minuscula y luego la funcion "startsWith" toma los datos de a letra y muestra los resultados
    };

    return (
        <>
            <div className='principal'>
                <div className='estructura-titulo'>
                    <div className='encabezado'>
                        <h1 className='titulo'>Agenda virtual</h1>
                        <img src={Agenda}/>
                    </div>
                    <div className='estructura'>
                        <div className='año'>
                            <h2>
                                <span>2</span>
                                <span>0</span>
                                <span>2</span>
                                <span>4</span>
                            </h2>
                        </div>

                        <div className='division'>
                            
                            {/*Formulario */}
                            <div className='formulario'>
                                <Formulario formNombre={setNombre} formApellido={setApellido} formCelular={setCelular} formCorreo={setCorreo} formDireccion={setDireccion} formNumero={setNumero} guardarBoton={botonGuardar} formularioLimpiar={limpiarFormulario} /> {/*retorna lo que se realizo en "formulario" atraves de props */}
                            </div>

                            {/*Lista de contacto */}
                            <h2>Mis contactos</h2>
                            <div className='lista'>
                                {
                                    registros.map((miObjepto, index) => {                     //recorre el arreglo array, index indica la posicion de "miObjepto" en "registro" 
                                        return <Lista list={miObjepto} id={index} botonEliminar={botonEliminar} />  //retorna lo que se realizo en "Lista" atraves de props
                                    })
                                }
                            </div>
                        </div>

                        {/*filtrar contacto*/}
                        <div className='filtrar-titulo'>
                            <h2>Busqueda rapida</h2>
                            <div className='filtrar'>
                                <div className='filtro'>
                                    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Buscar contacto' />      {/*lugar donde el usuario ingresa informacion para buscar filtrar los contactos */}
                                </div>
                                <div className='buscar'>
                                    {
                                        search && searchNombres().map((miObjepto) => {
                                            return <Filtro usuario={miObjepto} />   //retorna lo que se realizo en "Filtro" atraves de props
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <p>Copyright © 1999-2024 Agenda virtual S.R.L</p>
            </footer>

        </>
    )
}

export default App
