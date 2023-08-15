import styled from 'styled-components';
import { ContentCardType, NumberCardType } from '../../../shared/types/types';
import ScrollCarousel from '../ScrollCarousel';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: {
		theme: string;
		title: string;
		cards: NumberCardType[] | ContentCardType[];
		id: string;
	}
};

const CarouselBlockWrapper = styled.section``;

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
			<ScrollCarousel
				data={cards}
				useNumbersCards={id === 'numbers-carousel'}
				title={title}
				inView={inView}
			/>
		</CarouselBlockWrapper>
	);
};

export default CarouselBlock;
