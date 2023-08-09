import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	icon: string;
};

const Icon = styled.img`
	height: ${pxToRem(170)};
	width: auto;

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		height: ${pxToRem(120)};
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		height: ${pxToRem(70)};
	}
`;

const ContentBlockIcon = ({ icon }: Props) => {
	return (
		<Icon className="content-block-icon" src={`/icons/${icon}`} />
	);
};

export default ContentBlockIcon;
