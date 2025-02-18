import { screen, render } from '@testing-library/react';

jest.unmock('@talend/design-system');

import TextMode from './TextMode.component';

describe('File input text display mode', () => {
	const schema = {
		autoFocus: false,
		description: 'This is the file field',
		placeholder: 'Select a file to upload',
		disabled: false,
		readOnly: false,
		title: 'Upload file',
	};

	const props = {
		id: 'my-file-field',
		required: false,
		isValid: true,
		errorMessage: 'This is wrong',
		onChange: jest.fn(),
		onFinish: jest.fn(),
		schema,
		value: '',
	};

	const propsWithPresignedUrlTrigger = {
		...props,
		onTrigger: jest.fn(),
		schema: {
			...props.schema,
			triggers: [
				{
					action: 'generatePresignedURL',
					family: 'LocalStorage',
					type: 'presignedURL',
					parameters: [
						{ path: 'configuration.datastore.$selfReference', key: 'datastore.$selfReference' },
						{ path: 'configuration.pathStyleAccess', key: 'pathStyleAccess' },
						{ path: '$remoteEngineId', key: '$remoteEngineId' },
					],
					onEvent: 'change',
				},
			],
		},
	};

	it('should render', () => {
		// when
		const file =
			'data:text/xml;name=test.xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48bWQ6RW50aXR5RGVzY3JpcHRvciB4bWxuczptZD0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOm1ldGFkYXRhIiBlbnRpdHlJRD0iaHR0cDovL3d3dy5va3RhLmNvbS9leGtmcmR0aXFxOE1YVkEzTjBoNyI+PG1kOklEUFNTT0Rlc2NyaXB0b3IgV2FudEF1dGhuUmVxdWVzdHNTaWduZWQ9ImZhbHNlIiBwcm90b2NvbFN1cHBvcnRFbnVtZXJhdGlvbj0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOnByb3RvY29sIj48bWQ6S2V5RGVzY3JpcHRvciB1c2U9InNpZ25pbmciPjxkczpLZXlJbmZvIHhtbG5zOmRzPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwLzA5L3htbGRzaWcjIj48ZHM6WDUwOURhdGE+PGRzOlg1MDlDZXJ0aWZpY2F0ZT5NSUlEcERDQ0FveWdBd0lCQWdJR0FXUkRVckx1TUEwR0NTcUdTSWIzRFFFQkN3VUFNSUdTTVFzd0NRWURWUVFHRXdKVlV6RVRNQkVHCkExVUVDQXdLUTJGc2FXWnZjbTVwWVRFV01CUUdBMVVFQnd3TlUyRnVJRVp5WVc1amFYTmpiekVOTUFzR0ExVUVDZ3dFVDJ0MFlURVUKTUJJR0ExVUVDd3dMVTFOUFVISnZkbWxrWlhJeEV6QVJCZ05WQkFNTUNtUmxkaTA0TlRrMU56UXhIREFhQmdrcWhraUc5dzBCQ1FFVwpEV2x1Wm05QWIydDBZUzVqYjIwd0hoY05NVGd3TmpJM01qSXhOak13V2hjTk1qZ3dOakkzTWpJeE56TXdXakNCa2pFTE1Ba0dBMVVFCkJoTUNWVk14RXpBUkJnTlZCQWdNQ2tOaGJHbG1iM0p1YVdFeEZqQVVCZ05WQkFjTURWTmhiaUJHY21GdVkybHpZMjh4RFRBTEJnTlYKQkFvTUJFOXJkR0V4RkRBU0JnTlZCQXNNQzFOVFQxQnliM1pwWkdWeU1STXdFUVlEVlFRRERBcGtaWFl0T0RVNU5UYzBNUnd3R2dZSgpLb1pJaHZjTkFRa0JGZzFwYm1adlFHOXJkR0V1WTI5dE1JSUJJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBUThBTUlJQkNnS0NBUUVBCnIrU1JvbVJsZU1FYjdTaGYzeXlieWNwNTB3Z3c0VUtSaWh0K0xIWDJqeVFrRUJFWnRyeXkwVStidlZwNzVUaE9NZlFkVzFUUFh1TVkKS3dLMFM1bExwNUUrc3ltUlhHZS9pWFpUL05HT0ZRRk9pSFhOQ3hoYnNiQU9OTWFpOXdZeVYrUERqWEd0bmcrbDU2MyttOEVCYTQ2ZAo5SnhsVTREUkVMaDJQL0xBK21kQXVhNHJpVHh4MVNxNzZBOUpXZWVGaHVUdHp2c2IvdWVRb2lHYlRiVjM3MUpmTzQ3TGZmOEdiS2tWCnZpR0VpWkI2U1NTZGhZbmNGOFEwUlYyUXNSOERvTUsyakFZWmJ2WUo1NG9pZm9ESzByRU5peG12cVd6SlR0NDVFUEEvbytsMTR4d3cKTExiZUJnQ1pLUVFwV0dFdS91cFZ3YXU0eXpXN0hPZnM2R2ZBbndJREFRQUJNQTBHQ1NxR1NJYjNEUUVCQ3dVQUE0SUJBUUI5a0ltVgpia0pldDRmbDZ3NUFrN1dJNUdkcVVQTS9SOENWRitWZlZSS1NvTGpWMHZsZjNPU05JcWhocTJjdEFweUh3OXJzMVBiREl4NkJWOVR0Cmk5ejBaNXczOHRsWjZTZjMrUWFpRVJWdmZUKzVlUXhQWFdHbzBKVkRwMUtIZlYzUHJLR0lucUJDeWFWVXNjZUdkZFRCRDROWVNRbGkKZU9hT0VVWS9wK0VTend3NUM3a3hkc1F6Y0RyaGRzT2kvYWZuaVlhcjBySXZiYkRIdUdueFFQSjlqcVVwYkxZTTJsbzhaZ1VHMVVqTwpSbWMvQlk0eXAwU0FlcUxCeHlpQis0eldtYTR1eWRrcUNrVFRDNHhMVTN5ZkNIZE9kQVRmbTdOQUFKZk10TGRLODVidlllVk1CSE8yCnBXUmFDWGtWWGdmdWtwdTFXOHhrUUx5eXUrMDFFTEd5PC9kczpYNTA5Q2VydGlmaWNhdGU+PC9kczpYNTA5RGF0YT48L2RzOktleUluZm8+PC9tZDpLZXlEZXNjcmlwdG9yPjxtZDpOYW1lSURGb3JtYXQ+dXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6MS4xOm5hbWVpZC1mb3JtYXQ6dW5zcGVjaWZpZWQ8L21kOk5hbWVJREZvcm1hdD48bWQ6TmFtZUlERm9ybWF0PnVybjpvYXNpczpuYW1lczp0YzpTQU1MOjEuMTpuYW1laWQtZm9ybWF0OmVtYWlsQWRkcmVzczwvbWQ6TmFtZUlERm9ybWF0PjxtZDpTaW5nbGVTaWduT25TZXJ2aWNlIEJpbmRpbmc9InVybjpvYXNpczpuYW1lczp0YzpTQU1MOjIuMDpiaW5kaW5nczpIVFRQLVBPU1QiIExvY2F0aW9uPSJodHRwczovL2Rldi04NTk1NzQub2t0YXByZXZpZXcuY29tL2FwcC9hZGVlY2VkZXY4NTk1NzRfdGFsZW5kY2xvdWRldV8xL2V4a2ZyZHRpcXE4TVhWQTNOMGg3L3Nzby9zYW1sIi8+PG1kOlNpbmdsZVNpZ25PblNlcnZpY2UgQmluZGluZz0idXJuOm9hc2lzOm5hbWVzOnRjOlNBTUw6Mi4wOmJpbmRpbmdzOkhUVFAtUmVkaXJlY3QiIExvY2F0aW9uPSJodHRwczovL2Rldi04NTk1NzQub2t0YXByZXZpZXcuY29tL2FwcC9hZGVlY2VkZXY4NTk1NzRfdGFsZW5kY2xvdWRldV8xL2V4a2ZyZHRpcXE4TVhWQTNOMGg3L3Nzby9zYW1sIi8+';

		const { container } = render(<TextMode {...props} value={file} />);

		// then
		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render blank', () => {
		// when
		render(<TextMode {...props} />);

		// then
		expect(screen.getByRole('term')).toHaveTextContent('Upload file');
		expect(screen.getByRole('definition')).toHaveTextContent('');
	});

	it('should render crème.xlsx', () => {
		// when
		render(
			<TextMode
				{...propsWithPresignedUrlTrigger}
				value="93843640-ed30-4174-898b-69499da9e679.Y3LDqG1lLnhsc3g="
			/>,
		);

		// then
		expect(screen.getByRole('definition')).toHaveTextContent('crème.xlsx');
	});
});
