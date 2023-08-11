import styled from 'styled-components';
import { IntersectionType } from '../../../shared/types/types';
import TopIntersection from './TopIntersection';
import BottomIntersection from './BottomIntersection';
import { useInView } from 'react-intersection-observer';
import MobileSwiper from './MobileSwiper';

type Props = {
	data: IntersectionType;
}

const IntersectionContentBlockWrapper = styled.section``;

const IntersectionContentBlock = ({ data }: Props) => {
	const {
		primaryTitle,
		secondaryTitle,
		topContentRichText,
		bottomContentHeading,
		bottomContentRichText,
		image,
		theme
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<IntersectionContentBlockWrapper
			className={`intersection-block intersection-block--${theme}`}
			ref={ref}
		>
			<TopIntersection
				primaryTitle={primaryTitle}
				secondaryTitle={secondaryTitle}
				topContentRichText={topContentRichText}
				activateSwiper={inView}
			/>
			<MobileSwiper
				activateSwiper={inView}
				image={image}
			/>
			<BottomIntersection
				bottomContentHeading={bottomContentHeading}
				bottomContentRichText={bottomContentRichText}
				image={image}
				activateSwiper={inView}
			/>
		</IntersectionContentBlockWrapper>
	);
};

export default IntersectionContentBlock;
