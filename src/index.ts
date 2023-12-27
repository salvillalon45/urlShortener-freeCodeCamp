import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, function () {
	console.log(`Server is running on port ${PORT}`);
});
