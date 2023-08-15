import styled from 'styled-components';
import { ContentCardType } from '../../../shared/types/types';
import Image from 'next/image';
import pxToRem from '../../../utils/pxToRem';

type Props = {
	data: ContentCardType;
};

const ContentCarouselCardWrapper = styled.div`
	display: flex;
	column-gap: ${pxToRem(32)};
	height: 50vh;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column;
		justify-content: space-between;
		height: auto;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	height: 100%;
	width: calc(50% - ${pxToRem(32)});
	flex: 1;
	overflow: hidden;
	border-radius: 10px;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
		height: ${pxToRem(300)};
		margin-bottom: ${pxToRem(24)};
	}
`;

const Img = styled.img`
	object-fit: cover;
	height: 100%;
	width: 100%;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 1;
`;

const Title = styled.h4`
	color: var(--colour-white);

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(30)};
		line-height: ${pxToRem(36)};
		margin-bottom: ${pxToRem(72)};
	}
`;

const Description = styled.p`
	color: var(--colour-white);
	font-size: ${pxToRem(22)};
	line-height: ${pxToRem(28)};

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		font-size: ${pxToRem(16)};
		line-height: ${pxToRem(22)};
	}
`;

const ContentCarouselCard = ({ data }: Props) => {
	const {
		title,
		description,
		image
	} = data;

	return (
		<ContentCarouselCardWrapper>
			<ImageWrapper>
				<Img
					src={`/images/${image}`}
				/>
			</ImageWrapper>
			<ContentWrapper>
				{title && (
					<Title className="type-h2">{title}</Title>
				)}
				{description && (
					<Description>{description}</Description>
				)}
			</ContentWrapper>
		</ContentCarouselCardWrapper>
	);
};

export default ContentCarouselCard;
