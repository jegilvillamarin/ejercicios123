import React from 'react';
import PropTypes from 'prop-types';
import { Contacts } from '../models/contact.class';

const Contacto = ({contacto}) => {
    return (
        <div>
            <h1>Informacion del contacto</h1>
            <h2>Nombre: { contacto.nombre }</h2>
            <h2>Apellido: { contacto.apellido }</h2>
            <h2>Email: { contacto.email }</h2>
            <h2>Conectado: { contacto.conectado ? 'Conectado' : 'No Conectado' }</h2>
        </div>
    );
};


Contacto.propTypes = {
    contacto:PropTypes.instanceOf(Contacts)
};

export default Contacto;
