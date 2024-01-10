import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT, isUrlValid } from './utils';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const urls: URL[] = [];

app.post('/api/shorturl', function (req, res, next) {
	console.log(req.body);
	const { url: urlReqBody } = req.body;
	let response = {};

	if (isUrlValid(urlReqBody)) {
		const original_url = new URL(urlReqBody);

		if (!urls.includes(original_url)) {
			urls.push(original_url);
		}

		response = {
			original_url: original_url,
			short_url: urls.indexOf(original_url) + 1
		};
	} else {
		response = { error: 'invalid url' };
	}

	console.log({ urls });

	res.send(response);
});

app.get('/api/shorturl/:id', function (req, res, next) {
	console.log('req.params.id:: ', req.params.id);
	console.log('parseInt(req.params.id) - 1:: ', parseInt(req.params.id) - 1);

	const externalUrl = urls[parseInt(req.params.id) - 1].toString();
	console.log({ externalUrl });

	res.redirect(externalUrl);
});

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});
