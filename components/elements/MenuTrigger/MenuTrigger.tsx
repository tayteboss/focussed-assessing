import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	setMenuIsActive: (value: boolean) => void;
}

const MenuTriggerWrapper = styled.button`
	position: relative;
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	border-radius: 50%;
	border: 1px solid var(--colour-black);

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: ${pxToRem(36)};
		height: ${pxToRem(36)};
	}

	&:hover {
		background: var(--colour-primary-green);
		border-color: var(--colour-primary-green);

		* {
			background: var(--colour-white);

			&::before,
			&::after {
				background: var(--colour-white);
			}
		}
	}
`;

const Hamburger = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 1px;
	width: ${pxToRem(18)};
	background: var(--colour-black);

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: ${pxToRem(14)};
	}

	&::before {
		content: '';
		position: absolute;
		top: ${pxToRem(-4)};
		left: 50%;
		height: 1px;
		width: 100%;
		transform: translateX(-50%);
		background: var(--colour-black);

		transition: all var(--transition-speed-default) var(--transition-ease);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			top: ${pxToRem(-3)};
		}
	}

	&::after {
		content: '';
		position: absolute;
		top: ${pxToRem(4)};
		left: 50%;
		height: 1px;
		width: 100%;
		transform: translateX(-50%);
		background: var(--colour-black);

		transition: all var(--transition-speed-default) var(--transition-ease);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			top: ${pxToRem(3)};
		}
	}
`;

const MenuTrigger = ({ setMenuIsActive }: Props) => {
	return (
		<MenuTriggerWrapper onClick={() => setMenuIsActive(true)}>
			<Hamburger />
		</MenuTriggerWrapper>
	);
};

export default MenuTrigger;
