import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Image from 'next/image';
import ScrollIndicator from '../../elements/ScrollIndicator';
import { useInView } from 'react-intersection-observer';
import pxToRem from '../../../utils/pxToRem';
import BlurInText from '../../elements/BlurInText';

type Props = {
	data: {
		image: string;
		title: string;
	}
}

const HeroImageBlockWrapper = styled.section``;

const Inner = styled.div`
	position: relative;
	height: calc(100vh - 48px);
	height: calc(100dvh - 48px);
	width: 100%;
	border-radius: var(--border-radius);
	overflow: hidden;
`;

const ImageWrapper = styled.div`
	position: absolute;
	inset: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
`;

const TitleWrapper = styled.h1`
	position: absolute;
	top: ${pxToRem(74)};
	left: ${pxToRem(24)};
	z-index: 2;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		top: ${pxToRem(24)};
	}

	* {
		color: var(--colour-white);
		font-size: ${pxToRem(96)};
		line-height: ${pxToRem(96)};

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			font-size: ${pxToRem(30)};
			line-height: ${pxToRem(36)};
		}
	}
`;

const IndicatorWrapper = styled.div`
	position: absolute;
	bottom: ${pxToRem(24)};
	left: ${pxToRem(24)};
	z-index: 2;
`;

const HeroImageBlock = ({ data }: Props) => {
	const {
		image,
		title
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<HeroImageBlockWrapper ref={ref}>
			<LayoutWrapper>
				<Inner>
					{image && (
						<ImageWrapper
							className={`view-element-image-blur-up ${
								inView ? 'view-element-image-blur-up--in-view' : ''
							}`}
						>
							<Image
								src={`/images/${image}`}
								layout="fill"
								objectFit="cover"
							/>
						</ImageWrapper>
					)}
					{title && (
						<TitleWrapper>
							<BlurInText text={title} active={inView} />
						</TitleWrapper>
					)}
					<IndicatorWrapper
						className={`view-element-fade-in ${
							inView ? 'view-element-fade-in--in-view' : ''
						}`}
					>
						<ScrollIndicator theme="light-green" />
					</IndicatorWrapper>
				</Inner>
			</LayoutWrapper>
		</HeroImageBlockWrapper>
	);
};

export default HeroImageBlock;
