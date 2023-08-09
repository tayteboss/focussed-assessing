import styled from 'styled-components';
import InstagramSvg from '../../svgs/InstagramSvg';
import pxToRem from '../../../utils/pxToRem';
import Link from 'next/link';

const siteSettings = require('../../../content/siteSettings.json');

const SocialIconWrapper = styled.a`
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	border-radius: 50%;
	border: 1px solid var(--colour-white);
	display: flex;
	justify-content: center;
	align-items: center;

	transition: all var(--transition-speed-default) var(--transition-ease);

	&:hover {
		background: var(--colour-white);

		.ig-icon {
			path {
				fill: var(--colour-primary-green);
			}
		}
	}

	.ig-icon {
		path {
			transition: all var(--transition-speed-default) var(--transition-ease);
		}
	}
`;

const SocialIcon = ({ type = 'instagram' }) => {
	const {
		instagramLink
	} = siteSettings;

	return (
		<Link href={instagramLink} passHref>
			<SocialIconWrapper>
				{type == 'instagram'  && (
					<InstagramSvg />
				)}
			</SocialIconWrapper>
		</Link>
	);
};

export default SocialIcon;
