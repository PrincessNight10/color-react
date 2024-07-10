import React, {useState} from "react";

export const CambiarColor =()=> {
let colors =m['Orange','black','yellow','Green']
const [newColor, SetNewColor] = useState('');
const [styleColor, setstyleColor] = useState('blue');

const handColor = () => {
    if (colors.includes(newColor)){
        setstyleColor(newColor);

    } else {
        setstyleColor('blue');
    }
};

}