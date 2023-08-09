import Link from 'next/link';
import styled from 'styled-components';

const siteSettings = require('../../../content/siteSettings.json');

const MenuFooterLinksWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const LinkTag = styled.a`
	color: var(--colour-white);
	text-decoration: underline;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		color: var(--colour-dark-green);
	}
`;

const MenuFooterLinks = () => {
	const {
		privacyPiolicyLink,
		termsOfUseLink
	} = siteSettings;

	return (
		<MenuFooterLinksWrapper className="menu-footer-links">
			<Link href={privacyPiolicyLink} passHref>
				<LinkTag className="type-small">
					Privacy Policy
				</LinkTag>
			</Link>
			<Link href={termsOfUseLink} passHref>
				<LinkTag className="type-small">
					Terms of use
				</LinkTag>
			</Link>
		</MenuFooterLinksWrapper>
	);
};

export default MenuFooterLinks;
