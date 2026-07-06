
import React, { useState } from "react"; 
import Text from "./text";

export default function NameInput() {
    const [name, setName] = useState("");

    const [submitted, setSubmitted] = useState('');
    const [clicked, setClicked] = useState(false);
 

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }

    const HandleGoClick = () => {
        setSubmitted(name);
        setClicked(true);
        }

    return (


        <div className="element">
            <div className="name-input">
                <h1>Who even are you?</h1>
                <input type="text"
                    value={name} onChange={HandleChange} />
                {name === '' && <p>Please enter your name</p>}
            </div>

            <div className="go-button-container">
                <button className="go-button" onClick={HandleGoClick}>CLICK HERE FOR A VERY PREDICTABLE SURPRISE</button>
            </div>
            {submitted && clicked && !(name === '') && <Text name={name} />}
        </div>
    )
}