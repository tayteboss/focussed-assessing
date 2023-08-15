import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import LayoutWrapper from '../components/common/LayoutWrapper';
import pxToRem from '../utils/pxToRem';

const siteSettings = require('../content/siteSettings.json');

const PageWrapper = styled.div`
	h3 {
		margin-top: ${pxToRem(240)};
		margin-bottom: ${pxToRem(24)};
	}
`;

const Page = () => {
	const {
		seoDescription
	} = siteSettings;

	return (
		<PageWrapper>
			<NextSeo
				title="404 - Page not found"
				description={seoDescription || ''}
			/>
			<LayoutWrapper>
				<h3>Sorry, we couldn't find that page</h3>
				<a href="/">Go back to the homepage</a>
			</LayoutWrapper>
		</PageWrapper>
	)
}

export default Page;
