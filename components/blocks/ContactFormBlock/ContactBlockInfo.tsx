import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const ContactBlockInfoWrapper = styled.div`
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
		margin-bottom: ${pxToRem(64)};
	}

	h3,
	p,
	a {
		font-size: ${pxToRem(22)};
		line-height: ${pxToRem(28)};
	}
`;

const AddressWrapper = styled.div`
	margin-bottom: ${pxToRem(24)};
`;

const Title = styled.h3`
	color: var(--colour-white);
`;

const Text = styled.p`
	color: var(--colour-white);
`;

const PhoneWrapper = styled.div`
	margin-bottom: ${pxToRem(24)};
`;

const LinkTag = styled.a`
	color: var(--colour-primary-green);

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletMedium} {
		font-size: 1rem !important;
	}

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: 0.875rem !important;
	}

	&:hover {
		color: var(--colour-white);
	}
`;

const ContactBlockInfo = () => {
	return (
		<ContactBlockInfoWrapper>
			<AddressWrapper>
				<Title>Focussed Assessing</Title>
				<Text>PO Box 538</Text>
				<Text>Spring Hill</Text>
				<Text>QLD 4004</Text>
			</AddressWrapper>
			<PhoneWrapper>
				<Text>
					Phone: (07) 3055 5677
				</Text>
				<Text>
					Fax: (07) 3055 5688
				</Text>
			</PhoneWrapper>
			<AddressWrapper>
				<LinkTag href="info@focussedlossmanagement.com.au">
					info@focussedlossmanagement.com.au
				</LinkTag>
			</AddressWrapper>
		</ContactBlockInfoWrapper>
	);
};

export default ContactBlockInfo;
