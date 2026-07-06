
import './App.css'

import NameInput from './components/nameInput'
import Text from './components/text'
import ResetButton from './components/resetButton'
import { useState } from 'react'

function App() {
    const [name, setName] = useState("");

    const [submitted, setSubmitted] = useState('');
    const [clicked, setClicked] = useState(false);

  
    return (
        <div className="element">

            <ResetButton setClicked={setClicked} setName={setName} setSubmitted={setSubmitted} /> 
            
            <div className="title"
                style={{display: clicked && name !== '' ? 'none' : 'block'} }>
            <NameInput name={name} setName={setName} setSubmitted={setSubmitted} setClicked={setClicked} />
            </div>
            
      
            {submitted && clicked && !(name === '') && <Text name={name} />}


        </div>
    )
}

export default App
