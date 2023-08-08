import Link from 'next/link';
import styled from 'styled-components';

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
	return (
		<MenuFooterLinksWrapper>
			<Link href="/" passHref>
				<LinkTag className="type-small">
					Privacy Policy
				</LinkTag>
			</Link>
			<Link href="/" passHref>
				<LinkTag className="type-small">
					Terms of use
				</LinkTag>
			</Link>
		</MenuFooterLinksWrapper>
	);
};

export default MenuFooterLinks;
