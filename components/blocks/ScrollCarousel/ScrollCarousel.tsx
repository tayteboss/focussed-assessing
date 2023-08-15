import React from 'react';
import styled from 'styled-components';
import { ContentCardType, NumberCardType } from '../../../shared/types/types';
import ContentCarouselCard from '../ContentCarouselBlock/ContentCarouselCard';
import NumbersCarouselCard from '../CarouselBlock/NumbersCarouselCard';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import useViewportWidth from '../../../hooks/useViewportWidth';
import ScrollCarouselCard from '../../elements/ScrollCarouselCard';
import pxToRem from '../../../utils/pxToRem';
import LayoutWrapper from '../../common/LayoutWrapper';
import BlurInText from '../../elements/BlurInText';

type StyledProps = {
	$dataLength: number;
};

type Props = {
	data: NumberCardType[] | ContentCardType[];
	useNumbersCards?: boolean;
	title: string;
	inView: boolean;
};

const ScrollCarouselWrapper = styled.div<StyledProps>`
	height: ${(props) => `${props.$dataLength + 1}00vh`};
`;

const Outer = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	overflow-x: hidden;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		top: ${pxToRem(24)};
	}
`;

const InnerTitleWrapper = styled.div`
	text-align: center;
	margin-bottom: ${pxToRem(64)};
	padding-top: ${pxToRem(72)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(32)};
		padding-top: ${pxToRem(24)};
	}
`;

const Title = styled.h2`
	* {
		font-size: ${pxToRem(96)};
		line-height: ${pxToRem(96)};
		text-align: center;

		@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
			font-size: ${pxToRem(70)};
			line-height: ${pxToRem(70)};
		}

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(30)};
			line-height: ${pxToRem(36)};
		}
	}
`;

const OverflowWrapper = styled.div`
	overflow: hidden;
	width: 100%;
`;

const Inner = styled(motion.div)`
	display: flex;
	align-items: stretch;
	column-gap: 5vw;
	padding-bottom: ${pxToRem(100)};
`;

const ScrollCarousel = (props: Props) => {
	const {
		data,
		useNumbersCards,
		title,
		inView
	} = props;

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
			<Outer>
				<LayoutWrapper>
					<InnerTitleWrapper>
						{title && (
							<Title className="carousel-block__title">
								<BlurInText text={title} active={inView} />
							</Title>
						)}
					</InnerTitleWrapper>
				</LayoutWrapper>
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
			</Outer>
		</ScrollCarouselWrapper>
	);
};

export default ScrollCarousel;
