import styled from 'styled-components';
import { StepCardType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: StepCardType;
	index: number;
};

const StepCardWrapper = styled.div`
	position: sticky;
	top: 20vh;
	left: 0;
	height: 80vh;
	width: 100%;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		top: 10vh;
	}
`;

const Inner = styled(motion.div)`
	background: var(--colour-white);
	padding: ${pxToRem(24)};
	width: 100%;
	filter: drop-shadow(0px -4px 10px rgba(0, 0, 0, 0.25));
	border-radius: var(--border-radius);
`;

const Title = styled.h3`
	font-size: ${pxToRem(26)};
	line-height: ${pxToRem(48)};
	text-transform: uppercase;
	width: 100%;
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(32)};
		font-size: ${pxToRem(16)};
		line-height: ${pxToRem(22)};
		padding-bottom: ${pxToRem(12)};
	}
`;

const Line = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	height: 1px;
	background: var(--colour-black);
`;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	min-height: 50vh;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
		min-height: unset;
	}
`;

const Index = styled.div`
	font-size: ${pxToRem(300)};
	line-height: 0.55;
	color: var(--colour-primary-green);
	flex: 1;
	width: 50%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
		font-size: ${pxToRem(200)};
		line-height: 1;
		margin-bottom: ${pxToRem(100)};
	}
`;

const Content = styled.p`
	flex: 1;
	width: 50%;
	align-self: center;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
	}
`;

const StepCard = (props: Props) => {
	const {
		data,
		index
	} = props;

	const [windowHeight, setWindowHeight] = useState(0);
	const [distanceToTop, setDistanceToTop] = useState(0);

	const ref = useRef<HTMLDivElement>(null);

	const { scrollY } = useScroll();

	const transform = useTransform(
		scrollY,
		[distanceToTop - (windowHeight / 2), distanceToTop + (windowHeight * 1.5)],
		['translateY(0) scale(1)', 'translateY(-25%) scale(0.9)']
	);

	const filter = useTransform(
		scrollY,
		[distanceToTop - (windowHeight / 10), distanceToTop + (windowHeight * 2)],
		['blur(0px)', 'blur(3px)']
	);

	const width = useTransform(
		scrollY,
		[distanceToTop - windowHeight, distanceToTop],
		['0%', '100%']
	);

	useEffect(() => {
		if (ref?.current) {
			setDistanceToTop(window.pageYOffset + ref.current.getBoundingClientRect().top);
		}

		setWindowHeight(window.innerHeight);
	}, [distanceToTop]);

	const { ref: ref2, inView: inView2 } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<StepCardWrapper
			ref={ref}
			className="peformance"
		>
			<Inner
				style={{
					transform,
					filter
				}}
			>
				{data?.title && (
					<Title>
						{data.title}
						<Line style={{ width }} />
					</Title>
				)}
				<ContentWrapper
					ref={ref2}
					className={`view-element-blur-in ${
						inView2 ? 'view-element-blur-in--in-view' : ''
					}`}
				>
					{index && (
						<Index>{index}</Index>
					)}
					{data?.content && (
						<Content>{data.content}</Content>
					)}
				</ContentWrapper>
			</Inner>
		</StepCardWrapper>
	);
};

export default StepCard;
