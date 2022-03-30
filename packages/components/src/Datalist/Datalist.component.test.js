import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Datalist from './Datalist.component';

const props = {
	autoFocus: true,
	disabled: false,
	placeholder: 'Type here',
	noResultText: 'there is nothing ...',
	readOnly: false,
	title: 'My List',
	titleMap: [
		{ name: 'My foo', value: 'foo', description: 'foo description' },
		{ name: 'My bar', value: 'bar' },
		{ name: 'My foobar', value: 'foobar', description: 'foobar description' },
		{ name: 'My mdr', value: 'lol' },
	],
};

const multiSectionMap = [
	{
		title: 'cat 1',
		suggestions: [{ name: 'My foo', value: 'foo', description: 'foo description' }],
	},
	{ title: 'cat 2', suggestions: [{ name: 'My bar', value: 'bar' }] },
	{
		title: 'cat 3',
		suggestions: [{ name: 'My foobar', value: 'foobar', description: 'foobar description' }],
	},
	{ title: 'cat 4', suggestions: [{ name: 'My lol', value: 'lol' }] },
];

describe('Datalist component', () => {
	it('should render a input', () => {
		// when
		render(<Datalist id="my-datalist" onChange={jest.fn()} {...props} />);

		// then
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should show all suggestions on focus (even with a value)', () => {
		// given
		render(
			<Datalist autoFocus id="my-datalist" isValid onChange={jest.fn()} {...props} value="foo" />,
		);

		// when
		fireEvent.click(screen.getByRole('textbox'));

		// then
		// container.getElementsByClassName('');
		expect(screen.getByTitle('My foo')).toBeInTheDocument();
		expect(screen.getByTitle('My foobar')).toBeInTheDocument();
		expect(screen.getByTitle('My bar')).toBeInTheDocument();
		expect(screen.getByTitle('My mdr')).toBeInTheDocument();
	});

	it('should show all suggestions on down press (even with a value)', () => {
		// given
		render(
			<Datalist autoFocus id="my-datalist" isValid onChange={jest.fn()} {...props} value="foo" />,
		);

		// when
		userEvent.type(screen.getByRole('textbox'), '{down}');

		// then
		// container.getElementsByClassName('');
		expect(screen.getByTitle('My foo')).toBeInTheDocument();
		expect(screen.getByTitle('My foobar')).toBeInTheDocument();
		expect(screen.getByTitle('My bar')).toBeInTheDocument();
		expect(screen.getByTitle('My mdr')).toBeInTheDocument();
	});

	it('should show all suggestions on up press (even with a value)', () => {
		// given
		render(
			<Datalist autoFocus id="my-datalist" isValid onChange={jest.fn()} {...props} value="foo" />,
		);

		// when
		userEvent.type(screen.getByRole('textbox'), '{up}');

		// then
		// container.getElementsByClassName('');
		expect(screen.getByTitle('My foo')).toBeInTheDocument();
		expect(screen.getByTitle('My foobar')).toBeInTheDocument();
		expect(screen.getByTitle('My bar')).toBeInTheDocument();
		expect(screen.getByTitle('My mdr')).toBeInTheDocument();
	});

	it('should show suggestions that match filter', () => {
		// given
		render(<Datalist autoFocus id="my-datalist" isValid onChange={jest.fn()} {...props} />);

		// when
		userEvent.type(screen.getByRole('textbox'), 'foo');

		// then
		// container.getElementsByClassName('');
		expect(screen.getByTitle('My foo')).toBeInTheDocument();
		expect(screen.getByTitle('My foobar')).toBeInTheDocument();
		expect(screen.queryByTitle('My bar')).not.toBeInTheDocument();
		expect(screen.queryByTitle('My mdr')).not.toBeInTheDocument();
	});

	it('should show suggestions in group that match filter', () => {
		// given
		const multiSectionProps = { ...props, titleMap: multiSectionMap };
		render(<Datalist id="my-datalist" multiSection onChange={jest.fn()} {...multiSectionProps} />);

		// when
		userEvent.type(screen.getByRole('textbox'), 'foo');

		// then
		expect(screen.getByTitle('My foo')).toBeInTheDocument();
		expect(screen.getByTitle('My foobar')).toBeInTheDocument();
		expect(screen.queryByTitle('My bar')).not.toBeInTheDocument();
		expect(screen.queryByTitle('My lol')).not.toBeInTheDocument();
	});

	it('should call callback on focus event', () => {
		// given
		const onFocus = jest.fn();
		render(<Datalist id="my-datalist" onChange={jest.fn()} onFocus={onFocus} {...props} />);
		const input = screen.getByRole('textbox');

		// when
		fireEvent.click(input);

		// then
		expect(onFocus).toBeCalled();
	});

	it('should call callback on input live change', () => {
		// given
		const onLiveChange = jest.fn();
		render(
			<Datalist id="my-datalist" onChange={jest.fn()} onLiveChange={onLiveChange} {...props} />,
		);
		const input = screen.getByRole('textbox');

		// when
		userEvent.type(input, 'lo');

		// then
		expect(onLiveChange).toBeCalledWith(expect.anything(), 'lo');
	});

	it('should call callback on blur', () => {
		// given
		const onBlur = jest.fn();
		render(<Datalist id="my-datalist" onChange={jest.fn()} onBlur={onBlur} {...props} />);
		const input = screen.getByRole('textbox');

		// when
		fireEvent.blur(input);

		// then
		expect(onBlur).toBeCalled();
	});

	it('should close suggestions on blur', () => {
		// given
		render(<Datalist id="my-datalist" onChange={jest.fn()} {...props} />);
		const input = screen.getByRole('textbox');
		fireEvent.click(input);

		expect(screen.getAllByRole('listbox').length).toBeGreaterThan(0);

		// when
		fireEvent.blur(input);

		// then
		expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
	});

	it('should close suggestions on enter', () => {
		// given
		render(<Datalist id="my-datalist" onChange={jest.fn()} {...props} />);
		const input = screen.getByRole('textbox');
		fireEvent.click(input);

		expect(screen.getAllByRole('listbox').length).toBeGreaterThan(0);

		// when
		userEvent.type(input, '{enter}');

		// then
		expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
	});

	it('should close suggestions on esc', () => {
		// given
		render(<Datalist id="my-datalist" onChange={jest.fn()} {...props} />);
		const input = screen.getByRole('textbox');
		fireEvent.click(input);

		expect(screen.getAllByRole('listbox').length).toBeGreaterThan(0);

		// when
		userEvent.type(input, '{esc}');

		// then
		expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
	});

	it('should clear input', () => {
		// given
		const onChange = jest.fn();
		render(<Datalist id="my-datalist" onChange={onChange} {...props} value="foo" />);

		// when
		const input = screen.getByRole('textbox');
		userEvent.clear(input);
		fireEvent.blur(input);

		// then
		expect(onChange).toBeCalledWith(expect.anything(), { value: '' });
	});

	it('should reset previous value on ESC keydown', () => {
		// given
		const onChange = jest.fn();
		render(<Datalist id="my-datalist" onChange={onChange} {...props} value="foo" />);

		// when
		const input = screen.getByRole('textbox');
		userEvent.type(input, 'whatever{esc}');

		// then
		expect(onChange).not.toBeCalled();
		expect(input).toHaveValue('My foo');
	});

	it('should set value on props value update', () => {
		// given
		const onChange = jest.fn();
		const { rerender } = render(
			<Datalist id="my-datalist" onChange={onChange} {...props} value="foo" />,
		);
		expect(screen.getByRole('textbox')).toHaveValue('My foo');

		// when
		rerender(<Datalist id="my-datalist" onChange={onChange} {...props} value="bar" />);

		// then
		expect(screen.getByRole('textbox')).toHaveValue('My bar');
	});

	it('should set highlight on current value suggestion', () => {
		// given
		render(<Datalist id="my-datalist" onChange={jest.fn()} {...props} value="foo" />);
		const input = screen.getByRole('textbox');

		// when
		userEvent.click(input);

		// then
		expect(screen.getByTitle('My foo')).toHaveClass('theme-selected');
		expect(screen.getByTitle('My foobar')).not.toHaveClass('theme-selected');
		// expect(screen.getByTitle('My foo')).toHaveStyle('background: rgba(6, 117, 193, 0.2);');
	});

	describe('non restricted mode (default)', () => {
		it('should persist known value on blur', () => {
			// given
			const onChange = jest.fn();
			render(<Datalist id="my-datalist" onChange={onChange} {...props} />);
			expect(onChange).not.toBeCalled();

			// when
			const input = screen.getByRole('textbox');
			userEvent.type(input, 'foo');
			fireEvent.blur(input);

			// then
			expect(onChange).toBeCalledWith(expect.anything(), { value: 'foo' });
		});

		it('should persist unknown value on blur', () => {
			// given
			const onChange = jest.fn();
			render(<Datalist id="my-datalist" onChange={onChange} {...props} />);

			// when
			const input = screen.getByRole('textbox');
			userEvent.type(input, 'not a known value');
			fireEvent.blur(input);

			// then
			expect(onChange).toBeCalledWith(expect.anything(), { value: 'not a known value' });
		});

		it('should persist known value on enter', () => {
			// given
			const onChange = jest.fn();
			render(<Datalist id="my-datalist" onChange={onChange} {...props} />);
			expect(onChange).not.toBeCalled();

			// when
			const input = screen.getByRole('textbox');
			userEvent.type(input, 'foo{enter}');

			// then
			expect(onChange).toBeCalledWith(expect.anything(), { value: 'foo' });
		});

		it('should persist unknown value on enter', () => {
			// given
			const onChange = jest.fn();
			render(<Datalist id="my-datalist" onChange={onChange} {...props} />);

			// when
			const input = screen.getByRole('textbox');
			userEvent.type(input, 'not a known value{enter}');

			// then
			expect(onChange).toBeCalledWith(expect.anything(), { value: 'not a known value' });
		});
	});

	describe('restricted mode', () => {
		it('should persist known value on blur', () => {
			// given
			const onChange = jest.fn();
			render(<Datalist id="my-datalist" onChange={onChange} restricted {...props} />);
			expect(onChange).not.toBeCalled();
			const input = screen.getByRole('textbox');

			// when
			userEvent.type(input, 'foo');
			fireEvent.blur(input);

			// then
			expect(onChange).toBeCalledWith(expect.anything(), { value: 'foo' });
		});

		it('should reset unknown value on blur', () => {
			// given
			const onChange = jest.fn();
			render(<Datalist id="my-datalist" onChange={onChange} {...props} restricted value="foo" />);

			// when
			const input = screen.getByRole('textbox');
			userEvent.type(input, 'not a known value');
			fireEvent.blur(input);

			// then
			expect(onChange).not.toBeCalled();
			expect(input).toHaveValue('My foo');
		});

		it('should persist known value on enter', () => {
			// given
			const onChange = jest.fn();
			render(<Datalist id="my-datalist" onChange={onChange} restricted {...props} />);
			expect(onChange).not.toBeCalled();

			// when
			const input = screen.getByRole('textbox');
			userEvent.type(input, 'foo{enter}');

			// then
			expect(onChange).toBeCalledWith(expect.anything(), { value: 'foo' });
		});

		it('should reset unknown value on enter', () => {
			// given
			const onChange = jest.fn();
			render(<Datalist id="my-datalist" onChange={onChange} {...props} restricted value="foo" />);

			// when
			const input = screen.getByRole('textbox');
			userEvent.type(input, 'not a known value{enter}');

			// then
			expect(onChange).not.toBeCalled();
			expect(input).toHaveValue('My foo');
		});
	});
});
