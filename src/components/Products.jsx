import React, { useState } from 'react';
import './App.css'
import {Product, Product1} from './Product'

const initialProducts = [
    {
        id: 1,
        image: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/planta-yuca.jpg?itok=Gr-GFucT',
        name: 'Yuca',
        price: 'Precio: 100',
        Unid: 'Unidades: 4'
    },
    {
        id: 2,
        image: 'https://okdiario.com/img/recetas/2016/09/18/lechuga-boston.jpg',
        name: 'Lechuga',
        price: 'Precio: 200',
        Unid: 'Unidades: 6'
    },
    {
        id: 3,
        image: 'https://agro.bayer.co/-/media/bcs-inter/ws_colombia/cultivos/papa/papa.png',
        name: 'Papa',
        price: 'Precio: 500',
        Unid: 'Unidades: 5'
    },
    {
        id: 4,
        image: 'https://i.blogs.es/d3c49b/mango/840_560.jpg',
        name: 'Mango',
        price: 'Precio: 100',
        Unid: 'Unidades: 5'
    },
    {
        id: 5,
        image: 'https://agronegocios.uniandes.edu.co/wp-content/uploads/2016/10/Imagen-11-760x460.png',
        name: 'Mecato',
        price: 'Precio: 300',
        Unid: 'Unidades: 10'
    },
];

const initialProducts1 = [
    {
        id: 6,
        name: 'Ingresar Nuevo producto',
        boton: 'Aceptar'
    },
]

const App2 = () => {
    const [products] = useState([...initialProducts]);
    const [products1] = useState([...initialProducts1]);
    return (
        <>
        {products.map(product => <Product key={`${product.id}`} {...product} />)}
        {products1.map(product => <Product1 key={`${product.id}`} {...product} />)}
        </>
    );
}


export default App2;