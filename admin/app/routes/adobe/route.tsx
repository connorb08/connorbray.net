const auth_endpoint = 'https://ims-na1.adobelogin.com/ims/authorize/v2';
const client_id = '143925b556704c7e965be1d1c0f9f487';
const scope = 'openid,lr_partner_apis,lr_partner_rendition_apis,offline_access';

export default function () {
	const StartAuthFlow = async () => {
		window.open(
			`${auth_endpoint}?client_id=${client_id}&scope=${scope}`,
			'_blank'
		);
	};

	return (
		<>
			<button onClick={StartAuthFlow}>Click to login!</button>
		</>
	);
}
