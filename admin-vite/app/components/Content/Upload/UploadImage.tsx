import { Button, Dialog, Flex, Select } from '@radix-ui/themes';
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
				<Button>Upload Image</Button>
			</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Title>Upload an image</Dialog.Title>
				<Form onSubmit={handleSubmit}>
					<Flex direction={'column'} gap="3">
						<input name="file" type="file" accept=".png, .jpg" />
						<Select.Root defaultValue="gallery" name="category">
							<Select.Trigger />
							<Select.Content>
								<Select.Group>
									<Select.Label>Category</Select.Label>
									<Select.Item value="gallery">
										Gallery
									</Select.Item>
									<Select.Item value="images">
										Images
									</Select.Item>
									<Select.Item value="dist">Dist</Select.Item>
								</Select.Group>
							</Select.Content>
						</Select.Root>
						<Button type="submit">Upload</Button>
					</Flex>
				</Form>
			</Dialog.Content>
		</Dialog.Root>
	);
}
