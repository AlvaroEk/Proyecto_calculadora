import { useState } from "react";
import Button from './Button';

function Calculator(){
    const [displayValue, setDisplayValue] = useState('0');

    return (
        <div>
        <div>{displayValue}</div>
        {/*aqui van los botones  */}
        <Button value="1" onClick={() => setDisplayValue(displayValue + '1')} />
        <Button value="+" onClick={() => console.log('Logica para suma')} />
        </div>            
    );
}

export default Calculator;