
import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'



function Calc() {

  const [amount,setAmount]=useState("")
  const [rate,setRate]=useState("")
  const [year,setYear]=useState("")
  const [isInvalidPriciple,setisInvalidPriciple]=useState(false)
  const [isInvalidRate,setisInvalidRate]=useState(false)
  const [isInvalidPeriod,setisInvalidPeriod]=useState(false)

  const [interest,setInterest]=useState("")
  console.log(interest);
  
  
  console.log(amount);
  console.log(rate);
  console.log(year);
  
  
  
  const validateInput=(tag)=>{
    
    const{name,value}=tag

    // console.log(name,value);
    if(value==""){
      if(name=="priciple"){
        setAmount("")
      }else if(name=='rate'){
        setRate("")
      }else{
        setYear("")
      }
    }else{

    // console.log(!!value.match(/^\d*.?\d+$/));
    if(!!value.match(/^\d*.?\d+$/)){
      if(name=='priciple'){
        setAmount(value)
        setisInvalidPriciple(false)
      }
      else if(name=='rate'){
        setRate(value)
        setisInvalidRate(false)
      }
      else{
        setYear(value)
        setisInvalidPeriod(false)
      }
    }
    else{
      if(name=='priciple'){
        setisInvalidPriciple(true)
      }
      if(name=='rate'){
        setisInvalidRate(true)
      }
      if(name=='period'){
        setisInvalidPeriod(true)
      }
    }
    
    
    
  }
}


  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("button clicked");

    if(amount && rate && year){
     setInterest(amount*rate*year/100)
     
    }else{
      alert("Enter data to all feild")
    }

  } 
  const resetButon = () => {
    console.log("reset button clicked");
     
    
    setAmount("")
    setRate("")
    setYear("")
    setInterest(0)
    setisInvalidPriciple(false)
    setisInvalidPeriod(false)
    setisInvalidRate(false)
    
  };
  

  return (
    <div className='container p-4 w-50 border border-5 border-success bg-light'>
      <h1>Simple Interest Calculator</h1>
      <h4>Calculate Your Simple Interest Easily</h4>
      <div className='d-flex flex-column w-100 bg-warning p-5'>
       <h1 className='text-center'>₹ {interest}</h1>
       <h3 className='text-center'>Total Column Interest</h3>
      </div>
    <div>
        <form className='mt-5'>
        <TextField value={amount} name='priciple' onChange={(e)=>validateInput(e.target)} className='w-100 mb-3' id="amount" label="Principle Amount (₹)" variant="outlined" />
         { isInvalidPriciple &&
          <div className='text text-danger text-center fw-bold mb-3'>Invalid Priciple Amount</div>
         }
        <TextField value={rate} name='rate' onChange={(e)=>validateInput(e.target)} className='w-100 mb-3' id="interest" label="Rate of Interest (p.a) %" variant="outlined" />
        { isInvalidRate &&
          <div className='text text-danger text-center fw-bold mb-3'>Invalid Rate of Interest</div>
         }
        <TextField value={year} name='period' onChange={(e)=>validateInput(e.target)} className='w-100 mb-3' id="time" label="Year (Yr)" variant="outlined" />
        { isInvalidPeriod &&
          <div className='text text-danger text-center fw-bold mb-3'>Invalid Year</div>
         }
        <Stack direction="row" spacing={2}>
        <Button disabled={isInvalidPeriod||isInvalidPriciple||isInvalidRate} onClick={(e)=>handleCalculate(e)} type='submit' className='w-50' variant="contained">CALCULATE</Button>
        <Button type='button' className='w-50' variant="outlined" onClick={resetButon} >RESET</Button>
        </Stack>
        </form>
    </div>
    


    </div>
  )
}

export default Calc
