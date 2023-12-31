// <input .... name='unNombre' ..../>
// es importante definir el atribuno name para luego poder enlazar la tabla  y la etiqueta

import React, { useEffect, useState } from 'react';

// datos iniciales
// const initialForm = {
//     userName: '',
//     email: '',
//     id: null
// }

// definir el estado inicial
const initialForm = { name: '', constellation: '', id: null }

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

// const CrudForm = ({addUsers}) => {

    // programo el useEffect para actualizar los datos de los inputs al editar
    useEffect(() => {
        if (dataToEdit) {   // esta editando?  si dataToEdit es distinto a null 
            setForm(dataToEdit)  // envio los datos al estado form 
        } else {
            setForm(initialForm)  // si no se limpia el estado form (si dataToEdit es igual a null       )
        }
    },[dataToEdit]) // cuando alguien llene el dataToEdit se disparan  el if de arriba
        
    // se agrega un useState para menejar el estado del formulario se asigna intialForm (datos vacios)
    const [form, setForm] = useState(initialForm);

    // se prepara las funciones manejadoras
    // cuando el textbox del caballero del zodíaco y su constelación se cambien

    const handlerChange = (e) => {
        // edito un registro
        setForm(
            {
                // cada vez que tecleo en el textbox se cambia al atributo
                ...form,  // levanto el form tal cual esta (spread operator)
                // e.target.name -> es el nombre (name=xxx) del objeto que estoy
                // modificando. e.target.value -> es el valor que tiene el objeto (value)
                [e.target.name]: e.target.value,  // asignación de datos atributo: valor lo 
                // que cambia es el estado form.
            }
        );
    };



// agregar un registro mas a form, con formato initialForm
// manejador del envio de información del formulario

    const handlerSubmit = (e) => {
        e.preventDefault(); //para que el formulario no se recargue
        if (!form.name || !form.constellation) { // si algun textbox esta vacio
            alert("Datos incompletos");
            return;
        }
        // el objeto que se hace click es de quien recibo los datos: e.target.value;
        if (form.id === null) {
            createData(form); // llamo a la fucion para agregar un nuevo registro
        } else {
            updateData(form);  // llamo a la funcion que actualiza los datos de un registro
        }
        handlerReset(e);  //mando el evento desde aca o lo puedo dejar vacio y que genere el
        // evento al cliquear, de cualquier manera el formulario funciona igual.
    };

    // limpio los textbox
    const handlerReset = (e) => {
        // borro todos los datos en los textbox
        setForm(initialForm);
        // vacio la funcion set data to edit (se vuelve al estado inicial)
        setDataToEdit(null);
    };

    return (
        //             {/* value={form.email} form porque llamo al estado form y
        //             email que viene de initialForm */}
        //             <input value={form.email} type='email' onChange={()=>handlerChange()} className='form-control' id='eMail' name='eMail' aria-describedby='emailHelp' placeholder='usuario@mail.com'/>
        //             <small id="emailHelp" className="form-text text-muted">No compartimos tu email con nadie más.</small>
        <>
            {/* edito el titulo segun si se agrega o se edita */}
            <h3 className='text-center'>{dataToEdit?"Editar":"Agregar"}</h3>
            <form onSubmit={handlerSubmit}  className='container-fluid mb-1'>
                {/* 'name' es el atributo de initialDb en Crud.js */}
                {/* se pasan las funciones manejadoras a los eventos */}
                {/* se pasa como valor los valores iniciales por medio del estado form */}
                <div className='d-flex form-group mb-3 justify-content-evenly'>
                    <input type='text' name='name' placeholder='Nombre' onChange={handlerChange} value={form.name} /> 
                </div>
                <div className='d-flex form-group mb-3 justify-content-evenly'>
                    <input type='text' name='constellation' placeholder='Constelación' onChange={handlerChange} value={form.constellation} /> 
                </div>
                <div className='d-flex justify-content-evenly'>
                    <input type='submit' value='Enviar' onClick={handlerSubmit} />
                    <input type='reset' value='Limpiar' onClick={handlerReset} />
                </div>    
                    
                    
                {/* value=form.name traigo el valor que tengo en el estado form atributo name
                que al principio se encuentra vacio (initialForm) */}
                {/* onChange se activará cuando se cambie el valor (e.target.value) del textbox. 
                El cual llamará a la funcion handlerChange y pasará el evento, 
                este se cargara o editara */}
                
                
            </form>
        </>
    );
}

export default CrudForm;
