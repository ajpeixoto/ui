import { useEffect, useMemo, useState } from 'react';

import isObject from 'lodash/isObject';
import PropTypes from 'prop-types';

import Badge from '@talend/react-components/lib/Badge';

import {
	callbacksPropTypes,
	operatorPropTypes,
	operatorsPropTypes,
} from '../../facetedSearch.propTypes';
import { BadgeFaceted } from '../BadgeFaceted';
import { BadgeCheckboxesForm } from './BadgeCheckboxesForm.component';

const getSelectBadgeLabel = (value, t) => {
	const labelAll = t('FACETED_SEARCH_VALUE_ALL', { defaultValue: 'All' });
	if (value) {
		const checkedCheckboxes = value.filter(v => v.checked);
		if (checkedCheckboxes.length > 3) {
			return t('FACETED_SEARCH_VALUES_COUNT', {
				count: checkedCheckboxes.length,
				defaultValue: '{{count}} values',
			});
		} else if (!checkedCheckboxes.length) {
			return labelAll;
		}
		return checkedCheckboxes.map(val => val.label);
	}
	return labelAll;
};

// eslint-disable-next-line import/prefer-default-export
export const BadgeCheckboxes = ({
	id,
	readOnly,
	removable,
	label,
	initialOperatorOpened,
	initialValueOpened,
	operator,
	operators,
	size,
	value,
	category,
	values,
	displayType,
	filterBarPlaceholder,
	allSelector,
	t,
	callbacks,
	...rest
}) => {
	const [options, setOptions] = useState(values || []);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (!callbacks || !callbacks.getTags) {
			setIsLoading(false);
			return;
		}

		setIsLoading(true);
		callbacks
			.getTags()
			.then(data => {
				setOptions(
					data.map(item => {
						if (isObject(item)) {
							return { id: item.id, label: item.label };
						}
						return { id: item, label: item };
					}),
				);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [callbacks]);

	const currentOperators = useMemo(() => operators, [operators]);
	const currentOperator = operator || (currentOperators && currentOperators[0]);
	const badgeCheckboxesId = `${id}-badge-checkboxes`;
	const badgeLabel = useMemo(() => getSelectBadgeLabel(value, t), [value, t]);

	return (
		<BadgeFaceted
			badgeId={id}
			displayType={displayType}
			id={badgeCheckboxesId}
			initialOperatorOpened={initialOperatorOpened}
			initialValueOpened={initialValueOpened}
			labelCategory={label}
			labelValue={badgeLabel}
			operator={currentOperator}
			operators={currentOperators}
			readOnly={readOnly}
			removable={removable}
			size={size}
			t={t}
			value={value || []}
		>
			{({ onSubmitBadge, onChangeValue, badgeValue }) => (
				<BadgeCheckboxesForm
					id={badgeCheckboxesId}
					onChange={onChangeValue}
					onSubmit={onSubmitBadge}
					value={badgeValue}
					checkboxValues={options}
					feature={category || label}
					filterBarPlaceholder={filterBarPlaceholder}
					allSelector={allSelector}
					isLoading={isLoading}
					{...rest}
				/>
			)}
		</BadgeFaceted>
	);
};

BadgeCheckboxes.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	initialOperatorOpened: PropTypes.bool,
	initialValueOpened: PropTypes.bool,
	operator: operatorPropTypes,
	operators: operatorsPropTypes,
	size: PropTypes.oneOf(Object.values(Badge.SIZES)),
	category: PropTypes.string,
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.arrayOf(
			PropTypes.shape({
				checked: PropTypes.bool,
				id: PropTypes.string.isRequired,
				label: PropTypes.string.isRequired,
			}),
		),
	]),
	readOnly: PropTypes.bool,
	removable: PropTypes.bool,
	values: PropTypes.array,
	t: PropTypes.func.isRequired,
	callbacks: callbacksPropTypes,
	displayType: PropTypes.oneOf(Object.values(Badge.TYPES)),
	filterBarPlaceholder: PropTypes.string,
	allSelector: PropTypes.bool,
};
