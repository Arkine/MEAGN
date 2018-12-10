const Express = require('express');
const path = require('path');
const cors = require('cors');
const express_graphql = require('express-graphql');
// const bodyParser = require('body-parser');

const rootSchema = require('./routes/api/rootSchema');

const app = new Express();

const Routes = require('./routes');

app.use(cors());

app.use(Express.urlencoded({
    extended: true,
}));

// Convert resp to json
app.use(Express.json());

// Routing
// app.use('/', Routes);

// Graphql
app.use('/graphql', express_graphql({
    schema: rootSchema,
    graphiql: true
}));

// Where our static files are served from
app.use("/static", Express.static(path.join(__dirname, '../../build/static')));

// Because routing is done client-side, we want to always serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

module.exports = app;