
import './App.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
function App() {
 
  const [amount,setamount]=useState(0)
  const [year,setyear]=useState(0)
  const [rate,setrate]=useState(0)

  const [interest,setinterest]=useState(0)

  const calculate =(e)=>{
    const output = (amount*year*rate/100)
    setinterest(output)
  }

  const reset=(e)=>{
    setamount(0)
    setyear(0)
    setrate(0)
    setinterest(0)
  }

  return (
    <>
    <div className="App">
      <div className="container">
        <div className="header">
          <h1>Simple-Interest-Calculator</h1>
          <p>Calculate your simple interest with us</p>
        </div>
        <div className="total">
          <h2> &#8377; {interest}</h2>
          <p>Your Total Interest</p>
        </div>
        <div className="form">
          <form className='input'>
          <TextField id="outlined-basic" label="Amount" variant="outlined" value={amount||''} onChange={(e)=>setamount(e.target.value)} />
           <TextField id="filled-basic" label="year" variant="filled" value={year||''} onChange={(e)=>setyear(e.target.value)}/>
           <TextField id="standard-basic" label="Rate of interest" value={rate||''} variant="standard" onChange={(e)=>setrate(e.target.value)} />
          </form>
        </div>
        <div className="button">
        
          <Button variant="contained" onClick={e=>calculate(e)}>Calculate</Button>
          <Button variant="outlined" onClick={e=>reset(e)}>Reset</Button> 
        </div>
      </div>
    </div>

    </>
  )
}

export default App
