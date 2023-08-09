import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import Link from 'next/link';
import LogoSvg from '../../svgs/LogoSvg';
import pxToRem from '../../../utils/pxToRem';
import MenuTrigger from '../../elements/MenuTrigger';
import throttle from 'lodash.throttle';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

type StyledProps = {
	$isActive: boolean;
}

type Props = {
	setMenuIsActive: (value: boolean) => void;
}

const HeaderWrapper = styled.header<StyledProps>`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	background: var(--colour-white);
	transform: ${(props) => props.$isActive ? 'translateY(0)' : 'translateY(-100%)'};

	transition: all var(--transition-speed-default) var(--transition-ease);
`;

const HeaderInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${pxToRem(24)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(16)} 0;

		.logo {
			width: ${pxToRem(140)};
		}
	}
`;

const LinkTag = styled.a``;

const Header = ({ setMenuIsActive }: Props) => {
	const router = useRouter();

	const [isActive, setIsActive] = useState(true);

	const prevScrollPosRef = useRef(0);

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		const isScrollingDown = currentScrollPos > prevScrollPosRef.current;

		if (currentScrollPos < 110) {
			setIsActive(true);
			prevScrollPosRef.current = currentScrollPos;
			return;
		}

		setIsActive(!isScrollingDown);

		prevScrollPosRef.current = currentScrollPos;
	};

	useEffect(() => {
		const throttledHandleScroll = throttle(handleScroll, 100);
		window.addEventListener('scroll', throttledHandleScroll);

		return () => {
			window.removeEventListener('scroll', throttledHandleScroll);
		};
	}, [router.pathname]);

	return (
		<HeaderWrapper
			className="header"
			$isActive={isActive}
		>
			<LayoutWrapper>
				<HeaderInner>
					<Link href="/" passHref>
						<LinkTag>
							<LogoSvg className="logo" useDarkVersion />
						</LinkTag>
					</Link>
					<MenuTrigger setMenuIsActive={setMenuIsActive} />
				</HeaderInner>
			</LayoutWrapper>
		</HeaderWrapper>
	)
};

export default Header;
