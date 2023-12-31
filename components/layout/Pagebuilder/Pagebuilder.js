import styled from 'styled-components';
import ContentBlock from '../../blocks/ContentBlock';
import ScrollHeroVideoBlock from '../../blocks/ScrollHeroVideoBlock';
import IntersectionContentBlock from '../../blocks/IntersectionContentBlock';
import StepCardsBlock from '../../blocks/StepCardsBlock';
import HeroImageBlock from '../../blocks/HeroImageBlock';
import ContactFormBlock from '../../blocks/ContactFormBlock';
import CarouselBlock from '../../blocks/CarouselBlock';

const PagebuilderWrapper = styled.div`
	padding-top: var(--header-h);
`;

const Pagebuilder = ({ data }) => {

	const availableSections = {
		"scroll-hero-video": ScrollHeroVideoBlock,
		"content": ContentBlock,
		"intersection-content": IntersectionContentBlock,
		"step-cards": StepCardsBlock,
		"numbers-carousel": CarouselBlock,
		"content-carousel": CarouselBlock,
		"hero-image": HeroImageBlock,
		"contact-form": ContactFormBlock,
	};

	return (
		<PagebuilderWrapper>
			{data.map((section, key) => {
				if (availableSections[section.id]) {
					const Component = availableSections[section.id];
					return (
						<Component data={section} key={key} />
					);
				}
			})}
		</PagebuilderWrapper>
	);
};

export default Pagebuilder;
