import { UploadIcon } from '@radix-ui/react-icons';
import { IconButton, Flex, Button, Dialog } from '@radix-ui/themes';
import { Form } from '@remix-run/react';
import { useState } from 'react';

export default function () {
	const [dialogOpen, setDialogOpen] = useState(false);

	return (
		<>
			<IconButton
				size="4"
				radius="full"
				variant="ghost"
				onClick={() => setDialogOpen(!dialogOpen)}
			>
				<UploadIcon />
			</IconButton>

			<Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
				<Dialog.Content style={{ maxWidth: 450 }}>
					<Dialog.Title>Upload Files</Dialog.Title>
					{/* <Dialog.Description size="2" mb="4"> */}
					<Dialog.Description>
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
								<Button
									type="submit"
									variant="solid"
									color="iris"
								>
									Upload
								</Button>
							</Dialog.Close>
						</Flex>
					</Form>
				</Dialog.Content>
			</Dialog.Root>
		</>
	);
}
