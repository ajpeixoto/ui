import React from 'react';
import styled from 'styled-components';
import Step from '../Step';
import tokens from '../../../../deprecatedTokens';

const StepDisabled = styled(Step).attrs({ className: 'step--disabled', 'aria-disabled': 'true' })`
	color: ${({ theme }) => theme.colors?.grayColor[900]};
	cursor: not-allowed;

	&:before,
	.step__title {
		opacity: ${tokens.opacity.disabled};
	}

	.step__icon {
		background: radial-gradient(
			${tokens.sizes.m} ${tokens.sizes.m} at ${tokens.space.s} ${tokens.space.s},
			${({ theme }) => theme.colors?.grayColor[100]} 50%,
			transparent 50%
		);
	}
`;

export default React.memo(StepDisabled);
