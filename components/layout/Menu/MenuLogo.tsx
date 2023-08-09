import styled from 'styled-components';
import LogoSvg from '../../svgs/LogoSvg';
import pxToRem from '../../../utils/pxToRem';
import { useInView } from 'react-intersection-observer';

const MenuLogoWrapper = styled.div`
	display: none;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		display: block;
		position: absolute;
		top: ${pxToRem(24)};
		left: ${pxToRem(16)};

		.logo {
			width: ${pxToRem(140)};
		}

		&.view-element-fade-in {
			transition-delay: 150ms;
		}
	}
`;

const MenuLogo = () => {
	const { ref, inView } = useInView({
		triggerOnce: false,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<MenuLogoWrapper
			ref={ref}
			className={`view-element-fade-in ${
				inView ? 'view-element-fade-in--in-view' : ''
			}`}
		>
			<LogoSvg className="logo" useLightVersion />
		</MenuLogoWrapper>
	);
};

export default MenuLogo;
