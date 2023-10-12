//Using client component inside client component

'use client'

export default function Product(props){
    console.log(props.description)
    return(
        <div>
            <button onClick={()=>alert(props.description)}>Show Description</button>
        </div>
    )
}

//You can also use 
//export default function Product({description}){
   // console.log(description)
//}