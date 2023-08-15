import styled from 'styled-components';
import { NextSeo } from 'next-seo';
import Pagebuilder from '../components/layout/Pagebuilder';
import { motion } from 'framer-motion';
import { Transitions } from '../shared/types/types';

type Props = {
	pageTransitionVariants: Transitions;
}

const siteSettings = require('../content/siteSettings.json');
const data = require('../content/services.json');

const PageWrapper = styled(motion.div)``;

const Page = ({ pageTransitionVariants }: Props) => {
	const {
		seoDescription
	} = siteSettings;

	return (
		<PageWrapper
			variants={pageTransitionVariants}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			<NextSeo
				title={data.seoTitle || ''}
				description={seoDescription || ''}
			/>
			<Pagebuilder data={data.pageBuilder} />
		</PageWrapper>
	);
};

export default Page;
