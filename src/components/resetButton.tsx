
export default function ResetButton({ setClicked, setName, setSubmitted }) {
	{/*can always see reset button */ }
	{/*upload icon for it to display */ }

	return (
		< div >
			<button className="reset-button" onClick={() => { setClicked(false); setName(''); setSubmitted(''); }}>RESET</button>
		</div>
	)
		
}