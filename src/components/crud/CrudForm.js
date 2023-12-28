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
        if (dataToEdit) {
            setForm(dataToEdit)
        } else {
            setForm(initialForm)
        }
    },[dataToEdit])
        
    // se agrega un useState para menejar el estado del formulario se asigna intialForm (datos vacios)
    const [form, setForm] = useState(initialForm);

    // se prepara las funciones manejadoras
    // cuando el textbox del caballero del zodíaco y su constelación se cambien

    const handlerChange = (e) => {
        // edito un registro
        setForm(
            {
                ...form,
                [e.target.name]: e.target.value,
            }
        );
    };



// agregar un registro mas a form, con formato initialForm
// manejador del envio de información del formulario

    const handlerSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.constellation) {
            alert("Datos incompletos");
            return;
        }
        // el objeto que se hace click es de quien recibo los datos: e.target.value;
        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }
        handlerReset();
    };

    // limpio los textbox
    const handlerReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        //             {/* value={form.email} form porque llamo al estado form y
        //             email que viene de initialForm */}
        //             <input value={form.email} type='email' onChange={()=>handlerChange()} className='form-control' id='eMail' name='eMail' aria-describedby='emailHelp' placeholder='usuario@mail.com'/>
        //             <small id="emailHelp" className="form-text text-muted">No compartimos tu email con nadie más.</small>
        <>
            {/* edito el titulo segun si se agrega o se edita */}
            <h3>{dataToEdit?"Editar":"Agregar"}</h3>
            <form onSubmit={handlerSubmit}>
                {/* 'name' es el atributo de initialDb en Crud.js */}
                {/* se pasan las funciones manejadoras a los eventos */}
                {/* se pasa como valor los valores iniciales por medio del estado form */}
                <input type='text' name='name' placeholder='Nombre' onChange={handlerChange} value={form.name} /> 
                <input type='text' name='constellation' placeholder='Constelación' onChange={handlerChange} value={form.constellation} /> 
                <input type='submit' value='Enviar' onClick={handlerSubmit}/>
                <input type='reset' value='Limpiar' onClick={handlerReset} />
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
