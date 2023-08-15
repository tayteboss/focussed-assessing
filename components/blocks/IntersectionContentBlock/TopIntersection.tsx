import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import BlurInText from '../../elements/BlurInText';
import { useInView } from 'react-intersection-observer';
import LayoutGrid from '../../common/LayoutGrid';
import { motion } from 'framer-motion';

type StyledProps = {
	$noMarginBottom?: boolean;
}

type Props = {
	primaryTitle: string;
	secondaryTitle: string;
	topContentRichText: string;
	activateSwiper: boolean;
};

const TopIntersectionWrapper = styled.div`
	padding: ${pxToRem(64)} 0 ${pxToRem(96)};
	position: relative;
	min-height: 410px;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(36)} 0 0;
		min-height: unset;
	}

	.layout-wrapper {
		position: relative;
		z-index: 2;
	}
`;

const TitleWrapper = styled.div<StyledProps>`
	margin-bottom: ${pxToRem(100)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${(props) => props.$noMarginBottom ? 0 : pxToRem(100)};
	}
`;

const Title = styled.div``;

const ContentWrapper = styled.div`
	grid-column: 1 / span 4;
`;

const Content = styled.div``;

const SwiperWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 1;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}

	.layout-grid {
		height: 100%;
		width: 100%;
		align-items: end;
		grid-column-gap: 0;
	}
`;

const Swiper = styled(motion.div)`
	grid-column: 10 / -1;
	height: ${pxToRem(400)};
	width: 100vw;
	transform-origin: top left;
`;

const wrapperVariants = {
	hidden: {
		transform: 'translateY(100%) rotate(0deg)',
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		transform: 'translateY(100%) rotate(-45deg)',
		transition: {
			duration: 0.7,
			ease: 'easeInOut',
			delay: 0.5
		}
	}
};

const TopIntersection = (props: Props) => {
	const {
		primaryTitle,
		secondaryTitle,
		topContentRichText,
		activateSwiper
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<TopIntersectionWrapper ref={ref}>
			<LayoutWrapper>
				<TitleWrapper
					$noMarginBottom={!topContentRichText}
				>
					{primaryTitle && (
						<Title
							className="intersection-block__primary-title type-h1--blur-in"
						>
							<BlurInText text={primaryTitle} active={inView} />
						</Title>
					)}
					{secondaryTitle && (
						<Title
							className="intersection-block__secondary-title type-h1--blur-in"
						>
							<BlurInText
								text={secondaryTitle}
								active={inView}
								useDelay
							/>
						</Title>
					)}
				</TitleWrapper>
				{topContentRichText && (
					<LayoutGrid>
						<ContentWrapper>
							<Content
								className={`intersection-block__content type-p content view-element-blur-in ${
									inView ? 'view-element-blur-in--in-view' : ''
								}`}
								dangerouslySetInnerHTML={{ __html: topContentRichText }}
							/>
						</ContentWrapper>
					</LayoutGrid>
				)}
			</LayoutWrapper>
			<SwiperWrapper>
				<LayoutGrid>
					<Swiper
						className="intersection-block__swiper-top"
						variants={wrapperVariants}
						initial='hidden'
						animate={activateSwiper ? 'visible' : 'hidden'}
					/>
				</LayoutGrid>
			</SwiperWrapper>
		</TopIntersectionWrapper>
	);
};

export default TopIntersection;
