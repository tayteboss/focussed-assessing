import styled from 'styled-components';
import { NextSeo } from 'next-seo';

const siteSettings = require('../content/siteSettings.json');

const PageWrapper = styled.div``;

const Page = () => {
	const {
		seoDescription
	} = siteSettings;

	console.log('siteSettings', siteSettings);

	return (
		<PageWrapper>
			<NextSeo
				title="Focussed Assessing | Home"
				description={seoDescription || ''}
			/>
			<Pagebuilder />
		</PageWrapper>
	);
};

export default Page;
