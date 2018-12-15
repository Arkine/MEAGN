const Express = require('express');
const path = require('path');
const cors = require('cors');
const express_graphql = require('express-graphql');

// const bodyParser = require('body-parser');

const rootSchema = require('./routes/api/rootSchema');

const app = new Express();

const isDev = process.env.MODE === 'development' ? true : false;

app.use(cors());

// app.use(bodyParser);

app.use(Express.urlencoded({
    extended: true,
}));

// Convert resp to json
app.use(Express.json());

// Graphql
app.use('/graphql', express_graphql({
    schema: rootSchema,
    graphiql: isDev,
    ctx: req => ({
        ...req,
        auth: () => {},
        db: new Prisma({
            typeDefs: './database/generated/prisma.graphql',
            endpoint: 'http://localhost:4466',
            secret: 'testsecret',
            debug: isDev
        }),
    }),
}));

// Where our static files are served from
app.use("/static", Express.static(path.join(__dirname, '../../build/static')));

// Because routing is done client-side, we want to always serve the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

module.exports = app;