import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

const ScrollHeroVideoBlockWrapper = styled.section`
	height: 300vh;
	padding: ${pxToRem(24)};
	background: var(--colour-light-grey);
	position: relative;
	z-index: 5;

	&:first-child {
		padding-top: 0;
	}

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		padding: ${pxToRem(24)} ${pxToRem(16)};

		&:first-child {
			padding-top: 0;
		}
	}
`;

const Inner = styled.div`
	position: sticky;
	top: ${pxToRem(24)};
	left: 0;
	height: calc(100vh - 48px);
	height: calc(100dvh - 48px);
	width: 100%;
	overflow: hidden;
	border-radius: var(--border-radius);
	background: var(--colour-black);

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		top: ${pxToRem(16)};
		height: calc(100vh - 32px);
		height: calc(100dvh - 32px);
	}
`;

const Canvas = styled.canvas`
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const ScrollHeroVideoBlock = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const htmlRef = useRef<HTMLElement | null>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const frameCount = 16;

	const currentFrame = (index: number): string => (
		`/sequence/${index}.jpg`
	);

	const preloadImages = () => {
		for (let i = 1; i < frameCount; i++) {
			const img = new Image();
			img.src = currentFrame(i);
		}
	};

	const updateImage = (index: number) => {
		if (imgRef.current) {
			imgRef.current.src = currentFrame(index);

			if (contextRef.current) {
				contextRef.current.drawImage(imgRef.current, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
			}
		}
	};

	useEffect(() => {
		if (canvasRef.current) {
			const canvas = canvasRef.current;
			const context = canvas.getContext('2d');

			if (context) {
				contextRef.current = context;
				const img = new Image();
				imgRef.current = img;
				img.src = currentFrame(1);
				canvas.width = 1490;
				canvas.height = 613;
				img.onload = () => {
					if (contextRef.current) {
						contextRef.current.drawImage(imgRef.current!, 0, 0, canvasRef.current!.width, canvasRef.current!.height);
					}
				};
			}
		}

		if (htmlRef.current) {
			const html = htmlRef.current;
			const scrollHandler = () => {
				const scrollTop = window.scrollY;
				const maxScrollTop = window.innerHeight * 2;
				const scrollFraction = scrollTop / maxScrollTop;
				const frameIndex = Math.min(
					frameCount - 1,
					Math.ceil(scrollFraction * frameCount)
				);
				requestAnimationFrame(() => updateImage(frameIndex + 1));
			};
			window.addEventListener('scroll', scrollHandler);
			return () => {
				window.removeEventListener('scroll', scrollHandler);
			};
		}
	}, []);

	useEffect(() => {
		preloadImages();
	}, []);

	return (
		<ScrollHeroVideoBlockWrapper ref={htmlRef}>
			<Inner>
				<Canvas ref={canvasRef} id="hero-lightpass" />
			</Inner>
		</ScrollHeroVideoBlockWrapper>
	);
};

export default ScrollHeroVideoBlock;
