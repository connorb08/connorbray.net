import { useState, useEffect } from 'react';

export const useLocalStorage = <T>(
	key: string,
	defaultValue: T
): [object: T, setObject: (object: T) => void] => {
	const [value, setValue] = useState<T>(() => {
		let currentValue;

		try {
			currentValue = JSON.parse(
				localStorage.getItem(key) || String(defaultValue)
			);
		} catch (error) {
			currentValue = defaultValue;
		}

		return currentValue;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value, key]);

	return [value, setValue];
};
