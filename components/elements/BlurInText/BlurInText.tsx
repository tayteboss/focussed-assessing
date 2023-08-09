import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

type Props = {
	text: string;
	active: boolean;
	useDelay?: boolean;
}

const BlurInTextWrapper = styled(motion.div)``;

const Span = styled(motion.span)``;

const BlurInText = ({ text, active, useDelay = false }: Props) => {
	if (!text) return <></>;

	const [words, setwords] = useState<string [][]>([]);

	const groupStringToArray = (string: string): string[][] => {
		const words = string.split(' '); // Split the string by spaces to get an array of words
		const result: string[][] = [];

		words.forEach((word) => {
			const wordArray: string[] = [];
			for (let i = 0; i < word.length; i++) {
				wordArray.push(word[i]); // Push each letter as a separate string into the word array
			}
			result.push(wordArray); // Push the word array into the result array
			result.push([" "]); // Push a space array after each word
		});

		// Remove the extra space array at the end
		result.pop();

		return result;
	};

	useEffect(() => {
		setwords(groupStringToArray(text));
	}, [text]);

	const wrapperVariants = {
		hidden: {
			opacity: 0,
			transition: {
				duration: 0,
				ease: 'easeInOut'
			}
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 0,
				ease: 'easeInOut',
				staggerChildren: 0.05,
				delayChildren: useDelay ? 0.3 : 0
			}
		}
	};

	const childVariants = {
		hidden: {
			opacity: 0,
			filter: 'blur(15px)',
			transition: {
				duration: 0.3,
				ease: 'easeInOut'
			}
		},
		visible: {
			opacity: 1,
			filter: 'blur(0px)',
			transition: {
				duration: 0.3,
				ease: 'easeInOut'
			}
		}
	};

	return (
		<BlurInTextWrapper
			variants={wrapperVariants}
			initial='hidden'
			animate={active ? 'visible' : 'hidden'}
		>
			{words.map((word, i) => (
				word.map((letter, j) => (
					<Span
						key={j}
						variants={childVariants}
					>
						{letter}
					</Span>
				))
			))}
		</BlurInTextWrapper>
	);
};

export default BlurInText;
