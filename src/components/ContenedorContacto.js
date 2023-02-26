import React from 'react';
import { Contacts } from '../models/contact.class';
import Contacto from './Contacto';

const cargarContacto = new Contacts('Jairo','Gil Villamarin','Jgilvillamarin@gmail.com',false);

const ContenedorContacto = () => {
    return (
        <div>
            <Contacto contacto={ cargarContacto } />
        </div>
    );
};



export default ContenedorContacto;
