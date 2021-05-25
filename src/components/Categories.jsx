import React, { useState } from 'react';
import './App.css'
import {Category, Category1} from './Category'

const initialCategories = [
    {
        id: 1,
        image: 'https://statics-cuidateplus.marca.com/sites/default/files/styles/natural/public/planta-yuca.jpg?itok=Gr-GFucT',
        name: 'Verduras',
        Unid: '3 artículos disponibles'
    },
    {
        id: 2,
        image: 'https://i.blogs.es/d3c49b/mango/840_560.jpg',
        name: 'Fruta',
        Unid: '1 artículos disponibles'
    },
    {
        id: 3,
        image: 'https://agronegocios.uniandes.edu.co/wp-content/uploads/2016/10/Imagen-11-760x460.png',
        name: 'Mecato',
        Unid: '1 artículos disponibles'
    },
];

const initialCategories1 = [
    {
        id: 6,
        name: 'Ingresar Nueva Categoria',
        boton: 'Aceptar'
    },
]

const App3 = () => {
    const [category] = useState([...initialCategories]);
    const [category1] = useState([...initialCategories1]);
    return (
        <>
        {category.map(category => <Category key={`${category.id}`} {...category} />)}
        {category1.map(category => <Category1 key={`${category.id}`} {...category} />)}
        </>
    );
}



export default App3;
