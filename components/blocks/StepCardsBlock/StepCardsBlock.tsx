import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import { StepCardType } from '../../../shared/types/types';
import StepCard from './StepCard';

type Props = {
	data: {
		cards: StepCardType[];
	}
}

const StepCardsBlockWrapper = styled.section`
	background: var(--colour-dark-green);
	padding: 25vh 0;
`;

const Inner = styled.div`
	backface-visibility: hidden;
	perspective: 1000;
	transform: translate3d(0,0,0);
	transform: translateZ(0);
`;

const StepCardsBlock = ({ data }: Props) => {
	const {
		cards
	} = data;

	const hasCards = cards?.length > 0;

	return (
		<StepCardsBlockWrapper>
			<LayoutWrapper>
				<Inner>
					{hasCards && cards.map((item: StepCardType, i: number) => (
						<StepCard
							data={item}
							key={i}
							index={i + 1}
						/>
					))}
				</Inner>
			</LayoutWrapper>
		</StepCardsBlockWrapper>
	);
};

export default StepCardsBlock;
