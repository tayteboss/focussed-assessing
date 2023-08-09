import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import Pagebuilder from '../components/layout/Pagebuilder';

const siteSettings = require('../content/siteSettings.json');
const data = require('../content/home.json');

const PageWrapper = styled.div``;

const Page = () => {
	const {
		seoDescription
	} = siteSettings;

	return (
		<PageWrapper>
			<NextSeo
				title={data.seoTitle || ''}
				description={seoDescription || ''}
			/>
			<Pagebuilder data={data.pageBuilder} />
		</PageWrapper>
	);
};

export default Page;
