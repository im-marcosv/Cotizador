import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import {aMayusculas} from '../helper';

const Contenedor = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #fff;
    margin-top: 1rem;
`;

const Resumen = ({datos}) => {

    const {marca, year, plan} = datos;

    if(marca === '' || year === '' || plan === '')return null;

    return ( 
    <Contenedor>
        <h2>Resumen de Cotización</h2> 
        <ul>
            <li>Marca: {aMayusculas(marca)}</li>
            <li>Plan: {aMayusculas(plan)}</li>
            <li>Año: {year}</li>
        </ul>
    </Contenedor>
    );
}
Resumen.propTypes = {
    datos: PropTypes.object.isRequired
}
export default Resumen;