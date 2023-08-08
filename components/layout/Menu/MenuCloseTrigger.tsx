import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	setMenuIsActive: (value: boolean) => void;
}

const MenuCloseTriggerWrapper = styled.button`
	position: absolute;
	top: ${pxToRem(24)};
	right: ${pxToRem(48)};
	width: ${pxToRem(48)};
	height: ${pxToRem(48)};
	border-radius: 50%;
	border: 1px solid var(--colour-white);

	transition: all var(--transition-speed-default) var(--transition-ease);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		width: ${pxToRem(36)};
		height: ${pxToRem(36)};
		top: ${pxToRem(28)};
		right: ${pxToRem(16)};
	}

	&:hover {
		background: var(--colour-white);
		border-color: var(--colour-white);

		* {
			background: var(--colour-primary-green);

			&::before,
			&::after {
				background: var(--colour-primary-green);
			}
		}
	}
`;

const Cross = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		height: 1px;
		width: ${pxToRem(18)};
		transform: translate(-50%, -50%) rotate(-45deg);
		background: var(--colour-white);

		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	&::after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		height: 1px;
		width: ${pxToRem(18)};
		transform: translate(-50%, -50%) rotate(45deg);
		background: var(--colour-white);

		transition: all var(--transition-speed-default) var(--transition-ease);
	}
`;

const MenuCloseTrigger = ({ setMenuIsActive }: Props) => {
	return (
		<MenuCloseTriggerWrapper onClick={() => setMenuIsActive(false)}>
			<Cross />
		</MenuCloseTriggerWrapper>
	);
};

export default MenuCloseTrigger;
