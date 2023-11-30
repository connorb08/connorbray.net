import { ValueFormatterParams } from 'ag-grid-community';

export const byteFormatter = (params: ValueFormatterParams) => {
	const bytes = params.value;
	if (params.value == 0) {
		return '0.00 B';
	}
	var e = Math.floor(Math.log(bytes) / Math.log(1024));
	return (
		(bytes / Math.pow(1024, e)).toFixed(2) + ' ' + ' KMGTP'.charAt(e) + 'B'
	);
};

export const dateFormatter = (params: ValueFormatterParams) => {
	const date = params.value;
};
