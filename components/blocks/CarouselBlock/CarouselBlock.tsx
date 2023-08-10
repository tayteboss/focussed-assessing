import styled from 'styled-components';
import { ContentCardType, NumberCardType } from '../../../shared/types/types';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import ScrollCarousel from '../ScrollCarousel';
import BlurInText from '../../elements/BlurInText';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: {
		theme: string;
		title: string;
		cards: NumberCardType[] | ContentCardType[];
		id: string;
	}
};

const CarouselBlockWrapper = styled.section`
	position: sticky;
	top: 0;
	left: 0;
`;

const Inner = styled.div`
	padding-top: ${pxToRem(72)};
	text-align: center;
	margin-bottom: ${pxToRem(64)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		padding-top: ${pxToRem(24)};
		margin-bottom: ${pxToRem(32)};
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

const CarouselBlock = ({ data }: Props) => {
	const {
		theme,
		title,
		cards,
		id
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.1,
		rootMargin: '-50px'
	});

	return (
		<CarouselBlockWrapper
			className={`carousel-block carousel-block--${theme}`}
			ref={ref}
		>
			<LayoutWrapper>
				<Inner>
					{title && (
						<Title className="carousel-block__title">
							<BlurInText text={title} active={inView} />
						</Title>
					)}
				</Inner>
			</LayoutWrapper>
			<ScrollCarousel
				data={cards}
				useNumbersCards={id === 'numbers-carousel'}
			/>
		</CarouselBlockWrapper>
	);
};

export default CarouselBlock;
