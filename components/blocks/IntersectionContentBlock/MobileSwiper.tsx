import { motion } from 'framer-motion';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import LayoutGrid from '../../common/LayoutGrid';

type Props = {
	activateSwiper: boolean;
	image: string;
};

const MobileSwiperWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: flex;
		flex-direction: column;
		height: ${pxToRem(700)};
		position: relative;
	}

	@media (max-width: 380px) {
		height: ${pxToRem(380)};
	}
`;

const TopWrapper = styled.div`
	position: relative;
	flex: 1;
	height: 45%;
`;

const TopSwiperWrapper = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 1;
	flex: 1;

	.layout-grid {
		height: 100%;
		width: 100%;
		align-items: end;
		grid-column-gap: 0;
	}
`;

const TopSwiper = styled(motion.div)`
	grid-column: 5 / -1;
	height: 200%;
	width: 100vw;
	transform-origin: top left;
	transform: translateY(95%);
`;

const BottomWrapper = styled.div`
	position: relative;
	flex: 2;
	height: 55%;
`;

const BottomSwiperWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
	z-index: 2;
	flex: 1;
`;

const BottomSwiper = styled(motion.div)`
	grid-column: 1 / 5;
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

	.layout-grid {
		height: 100%;
		width: 100%;
	}
`;

const ImageInnerWrapper = styled.div`
	grid-column: 1 / 5;
	height: 100%;
	width: 100%;
	overflow: hidden;
`;

const Image = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
	object-position: right;
`;

const topWrapperVariants = {
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

const bottomWrapperVariants = {
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

const MobileSwiper = (props: Props) => {
	const {
		activateSwiper,
		image
	} = props;

	return (
		<MobileSwiperWrapper>
			<TopWrapper>
				<TopSwiperWrapper>
					<LayoutGrid>
						<TopSwiper
							className="intersection-block__swiper-top"
							variants={topWrapperVariants}
							initial='hidden'
							animate={activateSwiper ? 'visible' : 'hidden'}
						/>
					</LayoutGrid>
				</TopSwiperWrapper>
			</TopWrapper>
			<BottomWrapper>
				<BottomSwiperWrapper>
					<LayoutGrid>
						<BottomSwiper
							className="intersection-block__swiper-bottom"
							variants={bottomWrapperVariants}
							initial='hidden'
							animate={activateSwiper ? 'visible' : 'hidden'}
						/>
					</LayoutGrid>
				</BottomSwiperWrapper>
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
			</BottomWrapper>
		</MobileSwiperWrapper>
	);
};

export default MobileSwiper;
