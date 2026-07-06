

export default function NameInput({ name, setName, setSubmitted, setClicked }) {
    

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => { setName(e.target.value); }

    const HandleGoClick = () => {
        setSubmitted(name);
        setClicked(true);
        }

    return (
        
            /* shows up if button not clicked or name is empty */
            <div className="name-input">
                <h1>Who even are you?</h1>
                <input type="text"
                    value={name} onChange={HandleChange} />
                {name === '' && <p>Please enter your name</p>}

                <div className="go-button-container">
                    <button className="go-button" onClick={HandleGoClick}>CLICK HERE FOR A VERY PREDICTABLE SURPRISE</button>
                </div>
               
            </div>

            

    )
}