import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';
import pxToRem from '../utils/pxToRem';

export const GlobalStyles = createGlobalStyle`
	:root {
		--colour-white: ${theme.colours.white};
		--colour-black: ${theme.colours.black};
		--colour-mid-grey: ${theme.colours.midGrey};
		--colour-light-grey: ${theme.colours.lightGrey};
		--colour-dark-green: ${theme.colours.darkGreen};
		--colour-mid-green: ${theme.colours.midGreen};
		--colour-primary-green: ${theme.colours.primaryGreen};
		--font-regular: ${theme.fonts.regular};
		--font-bold: ${theme.fonts.bold};
		--transition-speed-default: ${theme.transitionSpeed.default};
		--transition-speed-fast: ${theme.transitionSpeed.fast};
		--transition-speed-extra-fast: ${theme.transitionSpeed.extraFast};
		--transition-speed-slow: ${theme.transitionSpeed.slow};
		--transition-speed-extra-slow: ${theme.transitionSpeed.extraSlow};
		--transition-ease: cubic-bezier(0.65, 0, 0.35, 1);
		--border-radius: ${pxToRem(20)};
	}

	* {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		border: none;
		list-style: none;
		background: none;
		outline: none;
		border-radius: 0;
		box-shadow: none;
		font-weight: 100;
	}

	::selection {
		background-color: var(--colour-primary-green);
		color: var(--colour-white);
	}

	html {
		scroll-behavior: smooth;
		background: var(--colour-light-grey);
		font-size: 16px;

		&.no-scroll {
			overflow-y: hidden;
			
			body {
				overflow-y: hidden;
			}
		}
	}

	body {
		position: relative;
		background: var(--colour-light-grey);
	}

	main {
		min-height: 100vh;
	}

	input,
	textarea,
	select,
	button,
	label,
	body {
		font-family: var(--font-regular);
		color: var(--colour-black);
		line-height: 1.4;
	}

	strong,
	b {
		font-weight: 900;
	}

	em {
		font-style: italic;
	}

	a {
		text-decoration: underline;
		color: var(--colour-black);
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	button {
		cursor: pointer;
	}

	h1,
	.type-h1 {
		font-size: ${theme.size.h1};
		line-height: 1.2;
		letter-spacing: -1.92px;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h1};
			letter-spacing: -0.6px;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h1};
		}

		&--blur-in {
			* {
				font-size: ${theme.size.h1};
				line-height: 1.2;
				letter-spacing: -1.92px;

				@media ${theme.mediaBreakpoints.tabletPortrait}
				{
					font-size: ${theme.sizeTablet.h1};
					letter-spacing: -0.6px;
				}

				@media ${theme.mediaBreakpoints.mobile}
				{
					font-size: ${theme.sizeMobile.h1};
				}
			}
		}
	}

	h2,
	.type-h2,
	h3,
	.type-h3 {
		font-size: ${theme.size.h2};
		line-height: 1.2;
		letter-spacing: -0.84px;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h2};
			letter-spacing: -0.6px;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h2};
		}
	}

	h4,
	.type-h4 {
		font-size: ${theme.size.h4};
		line-height: 1.2;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeTablet.h4};
			letter-spacing: -0.6px;
		}

		@media ${theme.mediaBreakpoints.mobile}
		{
			font-size: ${theme.sizeMobile.h4};
		}
	}

	p,
	.type-p,
	a,
	button {
		font-size: ${theme.size.body};
		line-height: 1.75rem;

		@media ${theme.mediaBreakpoints.tabletPortrait}
		{
			font-size: ${theme.sizeMobile.body};
			line-height: 1.375rem;
		}
	}

	.type-small {
		font-size: ${theme.size.small};
		line-height: 1.25rem;
	}

	.content {
		& > * {
			&:not(:last-child) {
				margin-bottom: ${pxToRem(24)};
			}
		}
	}

	.content-block {
		&--dark-green {
			.content-block__inner {
				background-color: var(--colour-dark-green);
			}

			.content-block__primary-title {
				color: var(--colour-primary-green);
			}

			.content-block__secondary-title {
				color: var(--colour-white);
			}

			.content-block__content {
				color: var(--colour-white);
			}

			.scroll-indicator {
				border-color: var(--colour-primary-green);

				&:hover {
					background: var(--colour-primary-green);

					svg {
						path {
							stroke: var(--colour-white);
						}
					}
				}
			}
		}

		&--light-green {
			.content-block__inner {
				background-color: var(--colour-primary-green);
			}

			.content-block__primary-title {
				color: var(--colour-dark-green);
			}

			.content-block__secondary-title {
				color: var(--colour-white);
			}

			.content-block__content {
				color: var(--colour-white);
			}

			.scroll-indicator {
				border-color: var(--colour-white);

				&:hover {
					background: var(--colour-white);

					svg {
						path {
							stroke: var(--colour-primary-green);
						}
					}
				}
			}
		}

		&--white {
			padding: ${pxToRem(24)} 0;
			background: var(--colour-dark-green);

			.content-block__inner {
				background-color: var(--colour-white);
			}

			.content-block__primary-title {
				color: var(--colour-dark-green);
			}

			.content-block__secondary-title {
				color: var(--colour-primary-green);
			}

			.content-block__content {
				color: var(--colour-dark-green);
			}

			.scroll-indicator {
				border-color: var(--colour-primary-green);

				&:hover {
					background: var(--colour-primary-green);

					svg {
						path {
							stroke: var(--colour-white);
						}
					}
				}
			}
		}
	}

	.intersection-block {
		&--dark {
			background: var(--colour-dark-green);

			.intersection-block__primary-title {
				color: var(--colour-primary-green);
			}

			.intersection-block__secondary-title {
				color: var(--colour-white);
			}

			.intersection-block__content {
				color: var(--colour-white);
			}

			.intersection-block__content-heading {
				color: var(--colour-white);
			}

			.intersection-block__swiper-top {
				background: var(--colour-white);
			}

			.intersection-block__swiper-bottom {
				background: var(--colour-dark-green);
			}
		}

		&--light {
			background: var(--colour-light-grey);

			.intersection-block__primary-title {
				color: var(--colour-primary-green);
			}

			.intersection-block__secondary-title {
				color: var(--colour-dark-green);
			}

			.intersection-block__content-heading {
				color: var(--colour-primary-green);
			}

			.intersection-block__content {
				color: var(--colour-black);
			}

			.intersection-block__swiper-top {
				background: var(--colour-white);
			}

			.intersection-block__swiper-bottom {
				background: var(--colour-light-grey);
			}
		}
	}

	.carousel-block {
		&--light {
			background: var(--colour-white);

			.carousel-block__title {
				color: var(--colour-dark-green);
			}
		}

		&--dark {
			background: var(--colour-dark-green);

			.carousel-block__title {
				color: var(--colour-white);
			}
		}
	}

	.view-element-fade-in
	{
		opacity: 0;

		transition: all var(--transition-speed-default) var(--transition-ease);

		&--in-view
		{
			opacity: 1;
		}
	}

	.view-element-blur-in
	{
		opacity: 0;
		filter: blur(15px);

		transition: all var(--transition-speed-default) var(--transition-ease);
		transition-delay: 300ms;

		&--in-view
		{
			opacity: 1;
			filter: blur(0px);
		}
	}

	.view-element-bottom-top
	{
		opacity: 0;
		transform: translateY(15px);

		transition: opacity 300ms cubic-bezier(0.65, 0, 0.35, 1), transform 300ms cubic-bezier(0.65, 0, 0.35, 1);

		&--in-view
		{
			opacity: 1;
			transform: translateY(0);
		}
	}

	.view-element-scale-up
	{
		transform: scale(0.95);
		opacity: 0;

		transition: opacity 300ms ease, transform 300ms ease;

		&--in-view
		{
			opacity: 1;
			transform: scale(1);
		}
	}

	.view-element-image-blur-up
	{
		img {
			transform: scale(1.1);
			filter: blur(3px);

			transition: all 3000ms var(--transition-ease);
		}


		&--in-view
		{
			img {
				transform: scale(1.01);
				filter: blur(0px);
			}
		}
	}

	.performance {
		-webkit-transform: translateZ(0);
	}

	::placeholder {
		color: currentcolor;
		opacity: 1;
	}

	input[type="search"]::-webkit-search-decoration,
	input[type="search"]::-webkit-search-cancel-button,
	input[type="search"]::-webkit-search-results-button,
	input[type="search"]::-webkit-search-results-decoration {
		-webkit-appearance: none;
	}

	input[type="hidden"] {
		display: none;
	}

	input,
	textarea,
	select {
		padding: 0.125rem 0;
		font-size: ${theme.size.body};
		width: 100%;
		appearance: none;
	}

	input::placeholder,
	textarea::placeholder {
		transition: all var(--transition-speed-default) var(--transition-ease);
	}

	textarea {
		min-height: 8rem;
	}

	label {
		display: inline-block;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	img,
	video {
		max-width: 100%;
		display: block;
		height: auto;
	}

	iframe {
		max-width: 100%;
		display: block;
	}
`;
