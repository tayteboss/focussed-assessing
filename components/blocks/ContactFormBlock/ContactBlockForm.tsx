import React from 'react';
import styled from 'styled-components';
import pxToRem from '../../../utils/pxToRem';

type StyledProps = {
	$isSending: boolean;
}

const ContactBlockFormWrapper = styled.div<StyledProps>`
	grid-column: span 6;
	color: var(--colour-white);
	pointer-events: ${({ $isSending }) => $isSending ? 'none' : 'auto'};
	opacity: ${({ $isSending }) => $isSending ? '0.4' : '1'};

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;

	.field {
		background: rgba(160, 160, 160, 0.1);
		border: 1px solid transparent;
		border-radius: 2px;
		padding: ${pxToRem(16)} ${pxToRem(18)} ${pxToRem(14)};
		margin-bottom: ${pxToRem(4)};
		color: var(--colour-white);

		transition: all var(--transition-speed-default) var(--transition-ease);

		&:hover {
			background: rgba(160, 160, 160, 0.15);
			border: 1px solid rgba(160, 160, 160, 0.15);
		}

		&:focus {
			background: rgba(160, 160, 160, 0.15);
			border: 1px solid rgba(160, 160, 160, 0.4);
		}

		&::placeholder {
			color: var(--colour-white);
			opacity: 50%;
		}
	}

	.button {
		background: var(--colour-primary-green);
		padding: ${pxToRem(14)} ${pxToRem(68)} ${pxToRem(10)};
		border-radius: 5px;
		width: ${pxToRem(192)};
		align-self: flex-end;
		margin-top: ${pxToRem(8)};
		cursor: pointer;
		text-align: center;

		transition: all var(--transition-speed-default) var(--transition-ease);

		@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
			align-self: flex-start;
		}

		&:hover {
			background: var(--colour-white);
		}
	}

	* {
		font-size: ${pxToRem(16)};
		line-height: ${pxToRem(24)};
	}
`;

const Success = styled.p`
	color: var(--colour-white);
	grid-column: span 6;

	@media ${(props) => props.theme.mediaBreakpoints.tabletPortrait} {
		grid-column: 1 / -1;
	}
`;

const ContactBlockForm = () => {
	const [result, setResult] = React.useState("");

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult("Sending...");

		const formData = new FormData(event.currentTarget);

		formData.append("access_key", "339569de-c63d-4490-bd54-99f3ee659ab4");

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData
		}).then((res) => res.json());

		if (res.success) {
			setResult("Success");
		} else {
			console.log("Error", res);
			setResult(res.message);
		}
	};

	return (
		<>
			{result === "Success" ? (
				<Success>Thank you for your submission</Success>
			) : (
				<ContactBlockFormWrapper $isSending={result === 'Sending...'}>
					<Form onSubmit={onSubmit}>
						<input
							className="field input"
							type="text"
							name="name"
							placeholder="Your Name"
							required
						/>
						<input
							className="field input"
							type="email"
							name="email"
							placeholder="Your Email"
							required
						/>
						<textarea
							className="field textarea"
							name="message"
							placeholder="Please let us know how we might be able to help you"
							required
						></textarea>
						<input
							className="button"
							type="submit"
							value={result === 'Sending...' ? 'Sending' : 'Submit'}
						/>
					</Form>
				</ContactBlockFormWrapper>
			)}
		</>
	);
};

export default ContactBlockForm;
