import styled from 'styled-components';
import { ContentCardType, NumberCardType } from '../../../shared/types/types';
import pxToRem from '../../../utils/pxToRem';
import BlurInText from '../../elements/BlurInText';
import { useInView } from 'react-intersection-observer';
import { AnimatePresence, motion } from 'framer-motion';
import CountUp from 'react-countup';

type Props = {
	data: NumberCardType;
}

const TopWrapper = styled.div``;

const Title = styled.h4`
	margin-bottom: ${pxToRem(64)};
	font-size: ${pxToRem(22)};
	line-height: 1.2;
	font-family: var(--font-bold);
	color: var(--colour-white);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(32)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: 0;
		font-size: ${pxToRem(14)};
	}
`;

const Amount = styled(motion.div)`
	margin-bottom: 10vh;
	color: var(--colour-white);
	font-size: 10vw;
	line-height: 1.2;
	font-family: var(--font-bold);

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: 15vw;
	}

	* {
		color: var(--colour-white);
		font-size: 10vw;
		line-height: 1;
		font-family: var(--font-bold);

		@media ${(props) => props.theme.mediaBreakpoints.mobile} {
			font-size: 15vw;
		}
	}
`;

const ContentWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column-reverse;
	}
`;

const Content = styled.p`
	flex: 3;
	width: 90%;
	font-size: ${pxToRem(22)};
	line-height: ${pxToRem(28)};
	color: var(--colour-white);

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
		font-size: ${pxToRem(16)};
		line-height: ${pxToRem(22)};
	}
`;

const IconWrapper = styled.div`
	flex: 1;
	width: 25%;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		margin-bottom: ${pxToRem(32)};
	}
`;

const Icon = styled.img`
	height: ${pxToRem(76)};
`;

const wrapperVariants = {
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

const NumbersCarouselCard = ({ data }: Props) => {
	const {
		title,
		amount,
		description,
		icon,
	} = data;

	const { ref: ref2, inView: inView2 } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<>
			<TopWrapper>
				{title && (
					<Title ref={ref2}>
						{title}
					</Title>
				)}
				<AnimatePresence>
					{amount && (
						<Amount
							variants={wrapperVariants}
							initial='hidden'
							animate='visible'
							exit='hidden'
							className="performance"
						>
							+$
							{inView2 && (
								<CountUp
									end={Number(amount)}
									delay={0.5}
									useEasing
								/>
							)}
						</Amount>
					)}
				</AnimatePresence>
			</TopWrapper>
			<ContentWrapper>
				{description && (
					<Content>{description}</Content>
				)}
				{icon && (
					<IconWrapper>
						<Icon src={`/icons/${icon}`} />
					</IconWrapper>
				)}
			</ContentWrapper>
		</>
	);
};

export default NumbersCarouselCard;
