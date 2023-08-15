import React from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import MenuLink from './MenuLink';
import { motion } from 'framer-motion';

type Props = {
	menuIsActive: boolean;
}

const MenuLinksWrapper = styled(motion.div)`
	padding: 0 ${pxToRem(48)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(24)} ${pxToRem(24)} 0;
	}
`;

const wrapperVariants = {
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.1,
			staggerDirection: -1,
			when: 'afterChildren',
		}
	},
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			staggerChildren: 0.1,
			when: 'beforeChildren',
		}
	}
};

const MenuLinks = ({ menuIsActive }: Props) => {
	return (
		<MenuLinksWrapper
			variants={wrapperVariants}
			initial='hidden'
			animate={menuIsActive ? 'visible' : 'hidden'}
		>
			<MenuLink
				title="Home"
				link="/"
			/>
			<MenuLink
				title="Services"
				link="/services"
			/>
			<MenuLink
				title="About"
				link="/about"
			/>
			<MenuLink
				title="Contact"
				link="/contact"
			/>
		</MenuLinksWrapper>
	);
};

export default MenuLinks;
