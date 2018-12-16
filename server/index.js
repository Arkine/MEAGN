
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../variables.env')
});

const app = require('./src');
const server = app.listen(process.env.PORT || 8080, () => {
	console.log(`Server listening on port ${server.address().port}`);
});