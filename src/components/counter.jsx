import {useState,useEffect} from "react"

// // no dependencies =>all renders
// // empty depenndecy array=>first renders
// // dependency array with stste variable=>first render + whenever the stste variable chenges
const Counter=()=>{
    const [count,setCount] = useState(10)
    const [count1,setCount1] = useState(10)
    useEffect(()=>{
        console.log('effect')
    },[count1])
    const increment = () =>{
        setCount(count+1)
    }
    const increment1 = () =>{
        setCount(count+1)
    }
    const decrement = ()=>{
        if(count>0){
        setCount(count-1)
        }
        else
        {alert('hello !!!will not decrese')
    }
}
    return(<>
    <h1>count:{count}</h1>
    <button onClick = {increment}>+</button>
    <button onClick = {decrement}>-</button>

    </>
    )
    
}

export default Counter