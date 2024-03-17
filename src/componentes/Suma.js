import React, { useState } from 'react';
function Suma(){

    const [num1, setNum1] = useState('0');
    const [num2, setNum2] = useState('0');
    const [operacion, setOperacion] = useState('+')
    let resultado = 0;
    

    function cambiarNum1(event){
        setNum1(event.target.value)
        
    }
    function cambiarNum2(event){
        setNum2(event.target.value)
        
    }
    function cambiarOperacion(event){
        setOperacion(event.target.value)
        
    }


    if(operacion === '+'){
        resultado = parseFloat(num1) + parseFloat(num2)
    }else if(operacion === '-'){
        resultado = parseFloat(num1) - parseFloat(num2)
    }else if(operacion === 'x'){
        resultado = parseFloat(num1) * parseFloat(num2)
    }else{
        resultado = parseFloat(num1) / parseFloat(num2)
    }
    
    

    return(
       <div>
        <p><input value={num1} onChange={cambiarNum1}/>
        <select value={operacion} onChange={cambiarOperacion}>
            <option value="+">+</option>
            <option value="-">-</option>   
            <option value="x">x</option>   
            <option value="/">/</option>        
        </select>
        <input value={num2} onChange={cambiarNum2}/> = {resultado}</p>
       </div>
    )
}
export default Suma;