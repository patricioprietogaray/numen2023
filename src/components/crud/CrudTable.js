import React from 'react';
import CrudTableRow from './CrudTableRow';

// datos desestructurado utilizado mas abajo
const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    
    
    return (
        <div>
            {/* <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre de Usuario</th>
                        <th scope="col">E-Mail</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usersDB.map((user, index) => {
                        <tr>
                            <th scope="row">{index}</th>
                            <td>{user.userName}</td>
                            <td>{user.email}</td>
                            <td className='d-flex justify-content-around'>
                                <button className='btn btn-warning btn-sm'>Editar</button>
                                <button className='btn btn-danger btn-sm'>Eliminar</button>
                            </td>
                        </tr>
                    })}
                    
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table> */}
            <h3>Tabla de Datos</h3>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th scope='col'>Nombre</th>
                        <th scope='col'>Constelación</th>
                        <th scope='col'>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* se muenstran los datos de manera estática */}
                    {/* <tr>
                        <td>Aioria</td>
                        <td>Leo</td>
                        <td>
                            <button>Editar</button>
                            <button>Eliminar</button>
                        </td>
                    </tr> */}

                    {/* se muestran los datos de manera dinámica */}
                    {/* se arma una validacion en caso que no se reciban datos */}
                    {
                        data.lenght === 0 && (
                            <tr>
                                <td colSpan='3'>Sin Datos</td>
                            </tr>
                        )
                    }
                    {
                        data.lenght !== 0 && (
                            // data.map(caballero => <CrudTableRow key={caballero.id} caballero={caballero} />)
                            // pasar la data desestructurada como props a CrudTableRow
                            data.map((caballero) => (
                                <CrudTableRow
                                    key={caballero.id}
                                    caballero={caballero}
                                    setDataToEdit={setDataToEdit}
                                    deleteData={deleteData}
                                />)
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default CrudTable;
