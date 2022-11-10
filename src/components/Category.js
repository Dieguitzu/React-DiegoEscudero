import React from 'react'

import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import {getProduct} from '../services/products';

export function Category() {
    return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Categorias
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item ><Link to={`Item/:category`} className='btn btn_ver_mas'>Jabon</Link></Dropdown.Item>
            <Dropdown.Item ><Link to={`Item/:category`} className='btn btn_ver_mas'>Cabello</Link></Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
}

