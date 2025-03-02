import React, { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, speed = 50 }) => {
	const [displayText, setDisplayText] = useState('');

	useEffect(() => {
		let i = 0;
		const typingEffect = setInterval(() => {
			if (i < text.length) {
				setDisplayText(text.slice(0, i + 1));
				i++;
			} else {
				clearInterval(typingEffect);
			}
		}, speed);

		return () => clearInterval(typingEffect);
	}, [text, speed]);

	return (
		<span className='border-r-2 border-indigo-600 pr-1 animate-pulse'>
			{displayText}
		</span>
	);
};

export default TypewriterEffect;
