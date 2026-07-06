
import { animate, stagger } from 'animejs';
import { useEffect, useRef } from 'react';
//import { text } from 'animejs';


function Text({ name }: { name: string }) {
	const textRef = useRef(null);
	const text = `HAPPY BIRTHDAY ${name.toUpperCase()}!`; 

	useEffect(() => {
		const els = textRef.current?.querySelectorAll('.balloon');
		if (!els || !els.length) return;

		animate(els, {
			y: '100cqh',
			loopDelay: 1000,
			loop: true,
			delay: stagger(100),
			from: 1,
			to: 0.14,
			duration: 3000,
			ease: 'inOutSine'

		});
	}, []
	);
	
	return (
		<div className="container"ref={textRef}>
		{text.split("").map((char, index) => (
			<div key={index}>
				{char === " " ? null : <div className="balloon">{char}</div>}
			</div>
		))}
	</div>

	
	)
}

export default Text;
