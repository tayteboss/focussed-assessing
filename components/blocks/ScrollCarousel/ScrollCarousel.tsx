import React from 'react';
import styled from 'styled-components';
import { ContentCardType, NumberCardType } from '../../../shared/types/types';
import ContentCarouselCard from '../ContentCarouselBlock/ContentCarouselCard';
import NumbersCarouselCard from '../CarouselBlock/NumbersCarouselCard';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useViewportWidth from '../../../hooks/useViewportWidth';
import ScrollCarouselCard from '../../elements/ScrollCarouselCard';

type StyledProps = {
	$dataLength: number;
};

type Props = {
	data: NumberCardType[] | ContentCardType[];
	useNumbersCards?: boolean;
};

const ScrollCarouselWrapper = styled.div<StyledProps>`
	height: ${(props) => `${props.$dataLength}00vh`};
	overflow: hidden;
`;

const Inner = styled(motion.div)`
	display: flex;
	align-items: stretch;
	column-gap: 5vw;
`;

const ScrollCarousel = ({ data, useNumbersCards }: Props) => {
	const hasData = data && data?.length > 0;
	const dataLength = data?.length || 1;

	const viewportWidth = useViewportWidth();
	const isMobile = viewportWidth === 'mobile' || viewportWidth === 'tabletPortrait';

	const [windowHeight, setWindowHeight] = useState(0);
	const [windowWidth, setWindowWidth] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const cardWidth = windowWidth * (isMobile ? 1 : 0.6);
	const columnGap = windowWidth * 0.05;

	const cardsWrapperWidth = (cardWidth * dataLength) + (columnGap * dataLength);

	const transform = useTransform(
		scrollY,
		[distanceToTop - windowHeight, distanceToTop + (windowHeight * dataLength)],
		[`translateX(${windowWidth}px)`, `translateX(-${cardsWrapperWidth}px)`]
	);

	useEffect(() => {
		if (ref?.current) {
			setDistanceToTop(window.pageYOffset + ref.current.getBoundingClientRect().top);
		}

		setWindowHeight(window.innerHeight);
		setWindowWidth(window.innerWidth);
	}, [distanceToTop]);

	return (
		<ScrollCarouselWrapper $dataLength={dataLength}>
			<Inner
				ref={ref}
				style={{
					transform
				}}
			>
				{hasData && data.map((card, i) => (
					<ScrollCarouselCard
						windowHeight={windowHeight}
						key={i}
						index={i}
						isMobile={isMobile}
					>
						{useNumbersCards ? (
							<NumbersCarouselCard
								data={card}
								key={i}
							/>
						) : (
							<ContentCarouselCard
								data={card}
								key={i}
							/>
						)}
					</ScrollCarouselCard>
				))}
			</Inner>
		</ScrollCarouselWrapper>
	);
};

export default ScrollCarousel;
