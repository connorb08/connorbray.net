import { UploadIcon } from '@radix-ui/react-icons';
import { Dialog, IconButton, Flex, Button } from '@radix-ui/themes';
import { Form } from '@remix-run/react';

export default function () {
	return (
		<Dialog.Root>
			<Dialog.Trigger>
				<IconButton size="4" radius="full" variant="ghost">
					<UploadIcon />
				</IconButton>
			</Dialog.Trigger>
			<Dialog.Content style={{ maxWidth: 450 }}>
				<Dialog.Title>Upload Files</Dialog.Title>
				<Dialog.Description size="2" mb="4">
					Select files to upload.
				</Dialog.Description>
				<Form
					action="/content"
					method="post"
					encType="multipart/form-data"
				>
					<Flex direction="column" gap="3">
						<input
							type="file"
							id="files"
							name="files"
							accept="image/jpeg"
							multiple
						/>
					</Flex>

					<Flex gap="3" mt="4" justify="end">
						<Dialog.Close>
							<Button variant="soft" color="gray">
								Cancel
							</Button>
						</Dialog.Close>
						<Dialog.Close>
							<Button type="submit" variant="solid" color="iris">
								Upload
							</Button>
						</Dialog.Close>
					</Flex>
				</Form>
			</Dialog.Content>
		</Dialog.Root>
	);
}
