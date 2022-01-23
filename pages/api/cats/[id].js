import { cats } from '../../../data';

export default function handler(req, res) {
	const { id } = req.query;
	const data = cats.filter((cat) => cat.id === Number(id));

	res.status(200).json({
		data,
	});
}
