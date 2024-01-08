import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT, isUrlValid } from './utils';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const urls = [];

app.post('/api/shorturl', function (req, res, next) {
	console.log(req.body);
	const { url: urlReqBody } = req.body;
	let response = {};

	if (isUrlValid(urlReqBody)) {
		let original_short_url = new URL(urlReqBody);
		console.log({ original_short_url });

		response = {
			original_short_url: 'orginial',
			short_url: 'short'
		};
	} else {
		response = { error: 'invalid url' };
	}

	res.send(response);
});

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});
