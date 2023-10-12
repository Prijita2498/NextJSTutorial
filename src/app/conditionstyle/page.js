'use client'

import style from '@/app/conditionstyle.module.css'
import { useState } from 'react'

export default function Page(){

    const [color,setColor] = useState("red");
    //Extracting class from CSS Module object
    const {red} = style
    return(
        <main>
            <h3 className={style.red}>Conditional Style </h3>
            <h4 className={style.green}>with CSS in Next JS</h4>
            <h3 className={color=="red"?style.red:style.green}>Applying condition using useState hook</h3><br/>
            <button onClick={()=>setColor("green")}>Change Color</button><br/><br/>
            <h3 style={{backgroundColor:color=="red"?"red":"green"}}>CSS With Style </h3><br/>
            <h3 id={style.pink}>Id attribute</h3>
            <h4 className={red}>Dummy Text</h4>
            <h4 className={red}>Dummy Text</h4>
            <h4 className={red}>Dummy Text</h4>
            <h4 className={red}>Dummy Text</h4>
        </main>
    )
}