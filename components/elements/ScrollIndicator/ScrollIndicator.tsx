import styled from 'styled-components';
import ArrowSvg from '../../svgs/ArrowSvg';
import pxToRem from '../../../utils/pxToRem';
import { motion } from 'framer-motion';
import { useState } from 'react';

type Props = {
	theme: string;
};

const ScrollIndicatorWrapper = styled.button`
	width: ${pxToRem(96)};
	height: ${pxToRem(96)};
	border: 2px solid var(--colour-white);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: ${pxToRem(48)};
		height: ${pxToRem(48)};
		border-width: 1px;
	}

	svg {
		transform: translateY(3px);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${pxToRem(25)};
			height: ${pxToRem(25)};
		}

		path {
			transition: all var(--transition-speed-default) var(--transition-ease);
		}
	}
`;

const ArrowWrapper = styled(motion.div)``;

const wrapperVariants = {
	hidden: {
		y: 0,
	},
	visible: {
		y: [0, -8, 0, -3, 0],
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 10,
			duration: 0.5
		}
	}
};

const ScrollIndicator = ({ theme }: Props) => {
	const [isHovered, setIsHovered] = useState(false);

	const scrollOneSectionDown = () => {
		const scrollHeight = window.innerHeight;
		const currentScrollPosition = window.scrollY;
		window.scrollTo({
			top: currentScrollPosition + scrollHeight,
			behavior: 'smooth',
		});
	};

	return (
		<ScrollIndicatorWrapper
			className="scroll-indicator"
			onClick={() => scrollOneSectionDown()}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<ArrowWrapper
				variants={wrapperVariants}
				initial='hidden'
				animate={isHovered ? 'visible' : 'hidden'}
			>
				<ArrowSvg useWhite={theme === 'light-green'} />
			</ArrowWrapper>
		</ScrollIndicatorWrapper>
	);
};

export default ScrollIndicator;
