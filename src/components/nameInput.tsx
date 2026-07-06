
import React, { useState } from "react"; 

export default function NameInput() {
    const [name, setName] = useState("");

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }

    return (


        <div className="name-input">
        <h1>Who even are you?</h1>
            <input type="text" 
                value={name} onChange={HandleChange} />
            
        </div>
    )
}