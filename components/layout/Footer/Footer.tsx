import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import LogoSvg from '../../svgs/LogoSvg';
import SocialIcon from '../../elements/SocialIcon';
import MenuFooterLinks from '../Menu/MenuFooterLinks';
import pxToRem from '../../../utils/pxToRem';

const FooterWrapper = styled.footer`
	background: var(--colour-black);

	.logo {
		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			width: ${pxToRem(140)};
		}
	}

	.menu-footer-links {
		a {
			&:hover {
				color: var(--colour-primary-green);
			}
		}
	}
`;

const FooterInner = styled.div`
	padding: ${pxToRem(24)} 0;
`;

const FooterTop = styled.div`
	margin-bottom: ${pxToRem(247)};
	display: flex;
	justify-content: space-between;
`;

const FooterBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
`;

const Credit = styled.p`
	color: var(--colour-white);
`;

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<FooterWrapper>
			<LayoutWrapper>
				<FooterInner>
					<FooterTop>
						<LogoSvg className="logo" useFooterVersion />
						<SocialIcon />
					</FooterTop>
					<FooterBottom>
						<MenuFooterLinks />
						<Credit className="type-small">
							© {year} Focussed Assessing
						</Credit>
					</FooterBottom>
				</FooterInner>
			</LayoutWrapper>
		</FooterWrapper>
	)
};

export default Footer;