import React, { useState } from "react";
import NameInput from "./nameInput.tsx";

export default function GoButton() {
    const [clicked, setClicked] = useState(false);

    // If the button has been clicked, hide the NameInput component and save the name to var and show the text
    //create key for name value to embed into link animation

    return (
        <div className="go-button">
            <button onClick={() => setClicked(true)}>Click for an extremely predictable surprise!</button>
        </div>
    )
}