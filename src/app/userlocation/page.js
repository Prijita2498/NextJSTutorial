'use client'

import Script from "next/script";

export default function Page(){
    return(
        <div>
            <Script src="/location.js" onLoad={()=>console.log("File Loaded")}/>
            <h1>Get User's Location details</h1>
        </div>
    )
}