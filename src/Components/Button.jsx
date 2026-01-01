import React from 'react'

const Button = (props) => {
  return (

      <div className='flex justify-center gap-6 mt-10'> 
        <button className='bg-amber-500 px-6 py-3 text-sm font-semibold rounded-2xl cursor-pointer active:scale-95'
        onClick={()=>{
         if(index>1){
          setIndex(props.index-1)
         }
        }}
        >Prev</button>
        <button className='border border-black px-6 py-3 rounded-2xl active:scale-95 cursor-pointer'
        onClick={()=>{
          setIndex(props.index)
        }}
        
        >{props.index}</button>
        <button className='border border-black px-6 py-3 rounded-2xl active:scale-95 cursor-pointer'
        onClick={()=>{
          setIndex(props.index+1)
        }}
        >{props.index+1}</button>
        <button className='border border-black px-6 py-3 rounded-2xl active:scale-95 cursor-pointer'
        onClick={()=>{
          setIndex(index+2)
        }}
        >{props.index+2}</button>
        <button className='bg-amber-500 px-6 py-3 text-sm font-semibold rounded-2xl cursor-pointer active:scale-95'
        onClick={()=>{
          setIndex(props.index+1)
        }}
        >Next</button>
      </div>
    
  )
}

export default Button
