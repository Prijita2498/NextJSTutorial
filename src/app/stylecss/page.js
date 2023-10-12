'use client'

import { useState } from "react"
export default function Page() {
    const [h3Style, setH3Style] = useState({color:'pink'});

    return (
        <div>
            <h1 style={{ backgroundColor: "blanchedalmond" }}>User Page</h1>
            <h3 style={h3Style}>Heading 3 for User</h3>
            <button onClick={()=>setH3Style({color:"brown"})}>Update Style</button>
        </div>
    )
}