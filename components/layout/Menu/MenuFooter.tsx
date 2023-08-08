import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import MenuFooterLinks from './MenuFooterLinks';
import SocialIcon from '../../elements/SocialIcon';
import { useInView } from 'react-intersection-observer';

const MenuFooterWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 ${pxToRem(48)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: 0 ${pxToRem(24)};
	}

	&.view-element-blur-in {
		transition-delay: 500ms;
	}
`;

const MenuFooter = () => {
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<MenuFooterWrapper
			ref={ref}
			className={`view-element-blur-in ${
				inView ? 'view-element-blur-in--in-view' : ''
			}`}
		>
			<MenuFooterLinks />
			<SocialIcon />
		</MenuFooterWrapper>
	);
};

export default MenuFooter;
