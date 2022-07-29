import React from 'react';

import { Token } from '../../../../../src/tokens/types';
import { TokensProps } from '../../TokensTypes';
import { StackVertical } from '../../../../../src';
import DefinitionListItemBreakpoint from './DefinitionListItem/DefinitionListItemBreakpoint';

const TokensDefinitionList = ({ tokens }: TokensProps) => {
	return (
		<StackVertical gap="S">
			{tokens.map((token: Token, index: number) => (
				<DefinitionListItemBreakpoint key={`${token.name}-${index}`} token={token} />
			))}
		</StackVertical>
	);
};

export default TokensDefinitionList;
