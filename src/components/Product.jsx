import React from 'react';


export const Product = (props) => {
  const { image, name, price, Unid } = props;
  return (
    <main id="Description">
        <div id="class">
            <img src={image} alt='' /> <br />
        </div>
        <div id="class2">
            <h1>{name}</h1>
            <header>{price}</header>
            <p>{Unid}</p>
        </div>
    </main>
  );
}


export const Product1 = (props) => {
    const {boton, name} = props;
    return (
        <main id="Description">
            <div id="class">
                <a href="/CreateProduct"><button id= "Button">{boton}</button></a>
            </div>
            <div id= "class3">
                <h1>{name}</h1>
            </div>
        </main>
    )
}