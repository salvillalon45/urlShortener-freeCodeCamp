import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { PORT, isValidHttpUrl } from './utils';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const urls: URL[] = [];

app.post('/api/shorturl', function (req, res, next) {
	const { url: urlReqBody } = req.body;
	let response = {};

	if (isValidHttpUrl(urlReqBody)) {
		console.log('Valid URL');

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

	res.send(response);
});

app.get('/api/shorturl/:id', function (req, res, next) {
	const id = parseInt(req.params.id);

	if (id) {
		const externalUrl = urls[id - 1].toString();
		res.redirect(externalUrl);
	} else {
		res.send({ error: 'Wrong format' });
	}
});

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});
