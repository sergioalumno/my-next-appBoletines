"use client"

import { useState } from "react"

export default function Counter() {
    const [num, setNum] = useState(0)
    function contador() {
        
        setNum(num+1)

        return num
    }

    return (
        <>
            <p>{num}</p>
          <button onClick={contador} >+1</button>  
        </>
    )
}