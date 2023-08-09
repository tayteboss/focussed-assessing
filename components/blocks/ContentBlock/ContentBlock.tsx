import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import ContentBlockIcon from './ContentBlockIcon';
import ScrollIndicator from '../../elements/ScrollIndicator';
import pxToRem from '../../../utils/pxToRem';
import BlurInText from '../../elements/BlurInText';
import { useInView } from 'react-intersection-observer';

type Props = {
	data: {
		primaryTitle: string;
		secondaryTitle: string;
		icon: string;
		content: string;
		theme: string;
	};
}

const ContentBlockWrapper = styled.section`
	margin-bottom: ${pxToRem(24)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(16)};
	}
`;

const Inner = styled.div`
	height: calc(100vh - 48px);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: ${pxToRem(72)} ${pxToRem(24)} ${pxToRem(24)};
	border-radius: var(--border-radius);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		height: calc(100vh - 32px);
		padding: ${pxToRem(24)} ${pxToRem(16)};
	}
`;

const ContentBlockTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		flex-direction: column;
		justify-content: flex-start;
	}
`;

const TitleWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(100)};
	}
`;

const Title = styled.div``;

const IconWrapper = styled.div`
	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		align-self: flex-end;
	}
`;

const ContentBlockBottom = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		flex-direction: column-reverse;
	}
`;

const IndicatorWrapper = styled.div`
	flex: 1;
	width: 50%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
	}
`;

const ContentWrapper = styled.div`
	flex: 1;
	width: 50%;

	@media ${(props) => props.theme.mediaBreakpoints.mobile} {
		width: 100%;
		margin-bottom: ${pxToRem(24)};
	}
`;

const Content = styled.p``;

const ContentBlock = ({ data }: Props) => {
	const {
		primaryTitle,
		secondaryTitle,
		icon,
		content,
		theme
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	const { ref: ref2, inView: inView2 } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ContentBlockWrapper
			className={`content-block content-block--${theme}`}
		>
			<LayoutWrapper>
				<Inner className="content-block__inner">
					<ContentBlockTop ref={ref}>
						<TitleWrapper>
							{primaryTitle && (
								<Title
									className="content-block__primary-title type-h1--blur-in"
								>
									<BlurInText text={primaryTitle} active={inView} />
								</Title>
							)}
							{secondaryTitle && (
								<Title
									className="content-block__secondary-title type-h1--blur-in"
								>
									<BlurInText
										text={secondaryTitle}
										active={inView}
										useDelay
									/>
								</Title>
							)}
						</TitleWrapper>
						<IconWrapper
							className={`view-element-fade-in ${
								inView ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							<ContentBlockIcon icon={icon} />
						</IconWrapper>
					</ContentBlockTop>
					<ContentBlockBottom ref={ref2}>
						<IndicatorWrapper
							className={`view-element-fade-in ${
								inView2 ? 'view-element-fade-in--in-view' : ''
							}`}
						>
							<ScrollIndicator theme={theme} />
						</IndicatorWrapper>
						<ContentWrapper>
							{content && (
								<Content
									className={`content-block__content view-element-blur-in ${
										inView2 ? 'view-element-blur-in--in-view' : ''
									}`}
								>
									{content}
								</Content>
							)}
						</ContentWrapper>
					</ContentBlockBottom>
				</Inner>
			</LayoutWrapper>
		</ContentBlockWrapper>
	);
};

export default ContentBlock;
