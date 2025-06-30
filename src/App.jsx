import { useState } from 'react';
import './App.css'
function App() { 
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  
  function clear(){
    setNum1(0);
    setNum2(0);
    setResult(0);

  };
  
  
  return (
    <div className="calc">
    <h2>Simple Calculator</h2>
    <input 
    type="number" 
    value={num1} 
    onChange={(e) => setNum1(e.target.value)} 
    placeholder="Enter first number" 
    />
    <input 
    type="number" 
    value={num2} 
    onChange={(e) => setNum2(e.target.value)} 
    placeholder="Enter second number" 
    />
    <button onClick={() => setResult(Number(num1) + Number(num2))}>Add</button><br></br>

    <button onClick={()=> setResult(num1-num2)}>Subtract</button><br></br>
    <button onClick={()=> setResult(num1*num2)}>Multiply</button><br></br>
    <button onClick={()=> setResult(num1/num2)}>Divide</button><br></br>
    <button onClick={clear}>Clear</button>
    <p>Result:{result}</p>
    
    </div>
    
  );
}
export default App;
