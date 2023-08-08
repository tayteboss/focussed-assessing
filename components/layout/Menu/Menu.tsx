import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import MenuCloseTrigger from './MenuCloseTrigger';
import MenuFooter from './MenuFooter';
import MenuLinks from './MenuLinks';
import { motion } from 'framer-motion';
import MenuLogo from './MenuLogo';

type Props = {
	setMenuIsActive: (value: boolean) => void;
	menuIsActive: boolean;
}

const MenuWrapper = styled(motion.div)`
	position: fixed;
	top: 0;
	right: 0;
	z-index: 150;
	width: ${pxToRem(720)};
	height: 100vh;
	height: 100dvh;
	background: var(--colour-primary-green);
	border-top-left-radius: var(--border-radius);
	border-bottom-left-radius: var(--border-radius);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: 100%;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
`;

const MenuInner = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: ${pxToRem(96)} 0 ${pxToRem(52)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(96)} 0 ${pxToRem(24)};
	}
`;

const wrapperVariants = {
	hidden: {
		x: '100%',
		transition: {
			delay: 0.5,
			duration: 0.5,
			ease: 'easeInOut'
		}
	},
	visible: {
		x: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		}
	}
};

const Menu = (props: Props) => {
	const {
		setMenuIsActive,
		menuIsActive
	} = props;

	return (
		<MenuWrapper
			variants={wrapperVariants}
			initial='hidden'
			animate={menuIsActive ? 'visible' : 'hidden'}
		>
			<MenuInner>
				<MenuLinks menuIsActive={menuIsActive} />
				<MenuFooter />
				<MenuLogo />
				<MenuCloseTrigger
					setMenuIsActive={setMenuIsActive}
				/>
			</MenuInner>
		</MenuWrapper>
	);
};

export default Menu;
