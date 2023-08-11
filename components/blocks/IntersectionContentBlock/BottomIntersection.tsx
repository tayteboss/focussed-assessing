import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LayoutGrid from '../../common/LayoutGrid';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

type Props = {
	bottomContentHeading: string;
	bottomContentRichText: string;
	image: string;
	activateSwiper: boolean;
};

const BottomIntersectionWrapper = styled.div`
	padding-bottom: ${pxToRem(80)};
	position: relative;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(42)} 0 ${pxToRem(126)};
	}

	.layout-wrapper {
		position: relative;
		z-index: 3;
	}

	.layout-grid {
		height: 100%;
		width: 100%;
		grid-column-gap: 0;
	}
`;

const ContentWrapper = styled.div`
	grid-column: 7 / span 4;
	margin-top: ${pxToRem(620)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-top: 0;
	}
`;

const Heading = styled.h3`
	margin-bottom: ${pxToRem(40)};
`;

const Content = styled.div``;

const SwiperWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: none;
	}
`;

const Swiper = styled(motion.div)`
	grid-column: 1 / 10;
	height: 200vh;
	width: 200vw;
	background: var(--colour-white);
	transform-origin: top right;
	justify-self: end;
`;

const ImageWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
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
	}
`;

const ImageInnerWrapper = styled.div`
	grid-column: 1 / 10;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

const Image = styled.img`
	object-fit: cover;
	height: 102%;
	width: 102%;
	object-position: right;
`;

const wrapperVariants = {
	hidden: {
		transform: 'rotate(0deg)',
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		transform: 'rotate(-45deg)',
		transition: {
			duration: 0.7,
			ease: 'easeInOut',
			delay: 0.5
		}
	}
};

const BottomIntersection = (props: Props) => {
	const {
		bottomContentHeading,
		bottomContentRichText,
		image,
		activateSwiper
	} = props;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<BottomIntersectionWrapper>
			<SwiperWrapper>
				<LayoutGrid>
					<Swiper
						className="intersection-block__swiper-bottom"
						variants={wrapperVariants}
						initial='hidden'
						animate={activateSwiper ? 'visible' : 'hidden'}
					/>
				</LayoutGrid>
			</SwiperWrapper>
			{image && (
				<ImageWrapper
					className={`view-element-image-blur-up ${
						activateSwiper ? 'view-element-image-blur-up--in-view' : ''
					}`}
				>
					<LayoutGrid>
						<ImageInnerWrapper>
							<Image src={`/images/${image}`} />
						</ImageInnerWrapper>
					</LayoutGrid>
				</ImageWrapper>
			)}
			<LayoutWrapper>
				<LayoutGrid>
					<ContentWrapper
						ref={ref}
						className={`view-element-blur-in ${
							inView ? 'view-element-blur-in--in-view' : ''
						}`}
					>
						{bottomContentHeading && (
							<Heading className="intersection-block__content-heading">
								{bottomContentHeading}
							</Heading>
						)}
						{bottomContentRichText && (
							<Content
								className="intersection-block__content type-p content"
								dangerouslySetInnerHTML={{ __html: bottomContentRichText }}
							/>
						)}
					</ContentWrapper>
				</LayoutGrid>
			</LayoutWrapper>
		</BottomIntersectionWrapper>
	);
};

export default BottomIntersection;
