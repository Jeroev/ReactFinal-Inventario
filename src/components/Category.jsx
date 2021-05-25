import React from 'react';

export const Category = (props) => {
  const { image, name,  Unid } = props;
  return (
    <main id="Description">
        <div id="class">
            <img src={image} alt='' /> <br />
        </div>
        <div id="class2">
            <h1>{name}</h1>
            <p>{Unid}</p>
        </div>
    </main>
  );
}


export const Category1 = (props) => {
    const {boton, name} = props;
    return (
    <main id="Description">
        <div id="class">
            <a href="/CreateCategory"><button id= "Button">{boton}</button></a>
        </div>
        <div id= "class3">
            <h1>{name}</h1>
        </div>
    </main>
    )
}