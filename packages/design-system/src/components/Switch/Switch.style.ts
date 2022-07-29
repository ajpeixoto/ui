import styled from 'styled-components';
import { shade } from 'polished';
import dsTokens from '@talend/design-tokens';

import tokens from '@talend/design-tokens';

export const SwitchIndicator = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 0;
	bottom: 0;
	z-index: ${tokens.coralElevationLayerStandardFront};

	&[data-animated='true'] {
		transition: ${tokens.coralTransitionFast};
	}
`;

export const Switch = styled.div<{ disabled: boolean; readOnly: boolean }>`
	div {
		position: relative;
		display: inline-flex;
		background: ${({ theme }) => theme.colors.inputRadioBackgroundColor};
		border-radius: 10rem;
		box-shadow: inset 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.25);
		overflow: hidden;
		${({ disabled }) => (disabled ? `opacity: ${tokens.coralOpacityM};` : '')}
	}

	button {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-around;
		margin: 0;
		padding: 0 1rem;
		color: ${({ theme }) => theme.colors.textColor}
		font: ${tokens.coralParagraphS};
    	opacity: ${tokens.coralOpacityM};
		user-select: none;
		cursor: pointer;
		background: none;
		border: none;
		z-index: ${tokens.coralElevationLayerInteractiveFront};
	}

	${SwitchIndicator} em {
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
		bottom: 0.2rem;
		left: 0.2rem;
		transition: background 0.3s;
		background: ${({ theme }) => theme.colors.activeColor[500]};
		border-radius: 100px;
	}

	div:hover ${SwitchIndicator} em {
		background: ${({ readOnly, theme }) =>
			!readOnly ? shade(0.25, theme.colors.activeColor[500]) : 'none'};
	}

	[aria-selected] {
		transition: color ${tokens.coralTransitionNormal};
	}

	[aria-selected='true'] {
		color: ${({ theme }) => theme.colors.inputBackgroundColor};
		opacity: 1;
	}

	[aria-selected] ~ ${SwitchIndicator} {
		visibility: hidden;
	}

	[aria-selected='true'] ~ ${SwitchIndicator} {
		visibility: visible;
	}
`;
