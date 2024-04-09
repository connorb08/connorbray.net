import type { ActionFunctionArgs } from '@remix-run/cloudflare';
import { Form } from '@remix-run/react';
import { UpdateProjectStat } from '~/database/projects';

export async function action({ request, context }: ActionFunctionArgs) {
	const env = context.env as Env;

	const formData = await request.formData();
	const linesOfCode = formData.get('linesOfCode');

	if (!linesOfCode) {
		return new Response('No lines of code provided', {
			status: 400,
		});
	}

	const result = await UpdateProjectStat(env, '6610cdec02e34801eeac0716', {
		name: 'Lines of code',
		value: linesOfCode.toString(),
		unit: 'lines',
	});
	return result;
}

export default function Database() {
	return (
		<>
			Database
			<Form method="PATCH">
				<label>Lines of code:</label>
				<input type="number" name="linesOfCode" />
				<button type="submit">Submit</button>
			</Form>
		</>
	);
}
