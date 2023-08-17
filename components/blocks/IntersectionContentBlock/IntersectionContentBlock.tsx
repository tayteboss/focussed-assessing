import styled from 'styled-components';
import { IntersectionType } from '../../../shared/types/types';
import TopIntersection from './TopIntersection';
import BottomIntersection from './BottomIntersection';
import { useInView } from 'react-intersection-observer';
import MobileSwiper from './MobileSwiper';
import { useState } from 'react';

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

	const [triggerAnimation, setTriggerAnimation] = useState(false);

	const { ref, inView } = useInView({
		triggerOnce: false,
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
				activateSwiper={triggerAnimation}
			/>
			<MobileSwiper
				activateSwiper={triggerAnimation}
				image={image}
			/>
			<BottomIntersection
				bottomContentHeading={bottomContentHeading}
				bottomContentRichText={bottomContentRichText}
				image={image}
				activateSwiper={triggerAnimation}
				setTriggerAnimation={setTriggerAnimation}
			/>
		</IntersectionContentBlockWrapper>
	);
};

export default IntersectionContentBlock;
