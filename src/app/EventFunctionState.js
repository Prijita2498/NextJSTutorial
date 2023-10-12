import { useState } from "react"

export default function EventFunctionState(){

    //UseState
    const [name,setName] = useState("Prijitha")

    // event using const
    const fruits = () =>{
        alert("Apple!")
        setName("Ezhava")
    }

    //event using parameter.
    const color = (item) =>{
        alert(item)
    }

    //inner component
    const InnerComp = () =>{
        return(
            <h4>Inner Component</h4>
        )
    }

    return(
        <div>
            <h1>Event, Function and State</h1>
            <h3>Use State : {name}</h3>
            <button onClick={()=>alert("Hello From Next JS!")}>Click Me</button>
            <button onClick={fruits}>Using Const</button>
            <button onClick={()=>color("Red")}>Using Parameter</button>
            <InnerComp/>
            {InnerComp()}
        </div>
    )
}