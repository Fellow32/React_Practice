import React, {useState} from 'react'



const Counter = () => {


    const [count,setCount] = useState(0)
    const [value,setValue] = useState('123')


    const increment = () => {
        setCount( count +1)
 }

 const decrement = () => {
   setCount( count -1)
 }


    return ( 
      
           
           <div className = "Counter" >
        <h1>{value}</h1>
       <h1>{count}</h1>
        <input
        type = 'text'
        value = {value}
        onChange = {event => setValue(event.target.value)}
        
        />
      <button onClick = {increment}> Increment</button>
      <button onClick = {decrement}>Decrement</button>
   

 
    

        </div>
    )
}


export default Counter