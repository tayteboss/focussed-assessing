import { ReactNode } from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	children: ReactNode;
};

const Wrapper = styled.div`
	margin: 0 auto;
	padding-left: ${pxToRem(24)};
	padding-right: ${pxToRem(24)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding-left: ${pxToRem(16)};
		padding-right: ${pxToRem(16)};
	}
`;

const LayoutWrapper = (props: Props) => (
	<Wrapper className="layout-wrapper">{props.children}</Wrapper>
);

export default LayoutWrapper;
