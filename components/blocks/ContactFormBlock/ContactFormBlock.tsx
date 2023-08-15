import React from 'react';
import styled from 'styled-components';
import LayoutWrapper from '../../common/LayoutWrapper';
import pxToRem from '../../../utils/pxToRem';
import BlurInText from '../../elements/BlurInText';
import { useInView } from 'react-intersection-observer';
import LayoutGrid from '../../common/LayoutGrid';
import ContactBlockForm from './ContactBlockForm';
import ContactBlockInfo from './ContactBlockInfo';

type Props = {
	data: {
		primaryTitle: string;
		secondaryTitle: string;
	};
};

const ContactFormBlockWrapper = styled.section`
	position: relative;
	z-index: 5;
	padding: ${pxToRem(24)} 0;

	&:first-child {
		padding-top: 0;
	}

	.contact-block {
		&__primary-title {
			color: var(--colour-primary-green);
		}

		&__secondary-title {
			color: var(--colour-white);
		}
	}
`;

const Inner = styled.div`
	padding: ${pxToRem(72)} ${pxToRem(24)};
	background: var(--colour-dark-green);
	border-radius: var(--border-radius);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(48)} ${pxToRem(24)};
	}
`;

const TitleWrapper = styled.div`
	margin-bottom: ${pxToRem(260)};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		margin-bottom: ${pxToRem(120)};
	}
`;

const Title = styled.div``;

const ContactFormBlock = ({ data }: Props) => {
	const {
		primaryTitle,
		secondaryTitle,
	} = data;

	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.2,
		rootMargin: '-50px'
	});

	return (
		<ContactFormBlockWrapper
			ref={ref}
			className="contact-block"
		>
			<LayoutWrapper>
				<Inner>
					<TitleWrapper>
						{primaryTitle && (
							<Title
								className="contact-block__primary-title type-h1--blur-in"
							>
								<BlurInText text={primaryTitle} active={inView} />
							</Title>
						)}
						{secondaryTitle && (
							<Title
								className="contact-block__secondary-title type-h1--blur-in"
							>
								<BlurInText
									text={secondaryTitle}
									active={inView}
									useDelay
								/>
							</Title>
						)}
					</TitleWrapper>
					<LayoutGrid>
						<ContactBlockInfo />
						<ContactBlockForm />
					</LayoutGrid>
				</Inner>
			</LayoutWrapper>
		</ContactFormBlockWrapper>
	);
};

export default ContactFormBlock;
