import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT, isValidHttpUrl } from './utils';

const app = express();

app.use(bodyParser.json());
app.use(cors());

const urls: URL[] = [];

app.post('/api/shorturl', function (req, res, next) {
	console.log(req.body);
	const { url: urlReqBody } = req.body;
	let response = {};

	if (isValidHttpUrl(urlReqBody)) {
		console.log('Valid URL');
		const original_url = new URL(urlReqBody);
		console.log({ urlReqBody });
		console.log({ original_url });

		if (!urls.includes(urlReqBody)) {
			urls.push(urlReqBody);
		}

		response = {
			original_url: urlReqBody,
			short_url: urls.indexOf(urlReqBody) + 1
		};
	} else {
		console.log('Not Valid URL');
		response = { error: 'invalid url' };
	}

	console.log({ urls });

	res.send(response);
});

app.get('/api/shorturl/:id', function (req, res, next) {
	console.log('req.params.id:: ', req.params.id);
	console.log('parseInt(req.params.id) - 1:: ', parseInt(req.params.id) - 1);
	const id = parseInt(req.params.id);
	if (id) {
		const externalUrl = urls[id - 1].toString();
		console.log({ externalUrl });
		res.redirect(externalUrl);
	} else {
		res.send({ error: 'Wrong format' });
	}
});

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});
