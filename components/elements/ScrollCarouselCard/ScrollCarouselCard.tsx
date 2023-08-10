import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	windowHeight: number;
	index: number;
	isMobile: boolean;
	children: React.ReactNode;
};

const ScrollCarouselCardWrapper = styled(motion.div)`
	background: var(--colour-primary-green);
	border-radius: var(--border-radius);
	padding: ${pxToRem(36)};
	flex: 0 0 60vw;
	min-width: 0;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex: 0 0 calc(100vw - ${pxToRem(32)});
		padding: ${pxToRem(24)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 75vh;
	}
`;

const ScrollCarouselCard = (props: Props) => {
	const {
		windowHeight,
		index,
		isMobile,
		children
	} = props;

	const [distanceToTop, setDistanceToTop] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const first = (distanceToTop - (windowHeight) + windowHeight * index);
	const second = (distanceToTop - windowHeight / 2) + windowHeight * index;
	const third = (distanceToTop + windowHeight) + windowHeight * index;

	const transform = useTransform(
		scrollY,
		[first, second, third],
		[isMobile ? 'scale(1)' : 'scale(0.95)', 'scale(1)', isMobile ? 'scale(1)' : 'scale(0.95)']
	);

	const filter = useTransform(
		scrollY,
		[first, second, third],
		['blur(8px)', 'blur(0px)', 'blur(1px)']
	);

	useEffect(() => {
		if (ref?.current) {
			setDistanceToTop(window.pageYOffset + ref.current.getBoundingClientRect().top);
		}
	}, [distanceToTop]);

	return (
		<ScrollCarouselCardWrapper
			ref={ref}
			style={{
				transform,
				filter
			}}
		>
			{children}
		</ScrollCarouselCardWrapper>
	);
};

export default ScrollCarouselCard;
