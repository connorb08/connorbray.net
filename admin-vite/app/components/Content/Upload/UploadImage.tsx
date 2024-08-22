import { Button, Dialog } from '@radix-ui/themes';
import { Form } from '@remix-run/react';
import { FormEvent } from 'react';

export function UploadImage() {
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const file = formData.get('file') as File;

		const url = URL.createObjectURL(file);
		const img = new Image();

		let width = 0;
		let height = 0;

		img.onload = async function () {
			width = img.width;
			height = img.height;
			URL.revokeObjectURL(img.src);

			formData.append('width', width.toString());
			formData.append('height', height.toString());

			const response = await fetch('/api/upload', {
				method: 'POST',
				body: formData,
			});
			if (response.ok) {
				// Handle success
				alert('success');
			} else {
				alert('error');
				// Handle error
			}
		};

		img.src = url;
	};

	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<Button>Upload</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title>Upload an image</Dialog.Title>
				<Form onSubmit={handleSubmit}>
					<input name="file" type="file" accept=".png, .jpg" />
					<Button type="submit">Upload</Button>
				</Form>
			</Dialog.Content>
		</Dialog.Root>
	);
}
