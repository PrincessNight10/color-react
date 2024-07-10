import React, {useState} from "react";

export const CambiarColor =()=> {
let colors =['orange','black','yellow','Green']
const [newColor, SetNewColor] = useState('');
const [styleColor, setstyleColor] = useState('blue');

const handColor = () => {
    if (colors.includes(newColor)){
        setstyleColor(newColor);

    } else {
        setstyleColor('blue');
    }
};
return (
    <div className="container"> 
    <p>
         escriba un color  y se existe cambiara el color 
    </p>
    <input onChange={event => SetNewColor(event.target.value.trim())} type="text" />
    <button onClick={handColor}> Cambiar color</button>
    <p style={{color: styleColor}} > leo es el mejor del mundo y campeon con su pais</p>
    </div>
  );
}


