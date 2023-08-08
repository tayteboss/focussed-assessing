import Link from 'next/link';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';
import { motion } from 'framer-motion';

type Props = {
	title: string;
	link: string;
}

const MenuLinkWrapper = styled(motion.div)``;

const LinkTag = styled.a`
	font-size: ${pxToRem(96)};
	line-height: ${pxToRem(112)};
	letter-spacing: -1.92px;
	color: var(--colour-white);
	text-decoration: none;

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		font-size: ${pxToRem(56)};
		line-height: ${pxToRem(56)};
		margin-bottom: ${pxToRem(24)};
		display: inline-block;
	}

	&:hover {
		color: var(--colour-dark-green);
	}
`;

const childVariants = {
	hidden: {
		opacity: 0,
		x: -16,
		filter: 'blur(6px)',
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	},
	visible: {
		opacity: 1,
		x: 0,
		filter: 'blur(0px)',
		transition: {
			duration: 0.3,
			ease: 'easeInOut'
		}
	}
};

const MenuLink = (props: Props) => {
	const {
		title,
		link
	} = props;

	return (
		<MenuLinkWrapper variants={childVariants}>
			<Link href={link} passHref>
				<LinkTag>{title}</LinkTag>
			</Link>
		</MenuLinkWrapper>
	);
};

export default MenuLink;
