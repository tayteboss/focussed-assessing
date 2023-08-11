export type MediaType = {
	media: [
		{
			webmVideoFile: {
				url: string;
			};
			mp4VideoFile: {
				url: string;
			};
			placeholderImage: {
				url: string;
			}
		}
	];
};

export type Transitions = {
	hidden: {
		opacity: number;
		transition: {
			duration: number;
		}
	}
	visible: {
		opacity: number;
		transition: {
			duration: number;
			delay?: number
		}
	}
};

export type StepCardType = {
	title: string;
	content: string;
}

export type NumberCardType = {
	title?: string;
	description?: string;
	amount?: string;
	icon?: string;
}

export type ContentCardType = {
	title?: string;
	description?: string;
	image?: string;
}

export type IntersectionType = {
	primaryTitle: string;
	secondaryTitle: string;
	topContentRichText: string;
	bottomContentHeading: string;
	bottomContentRichText: string;
	image: string;
	theme: string;
}
