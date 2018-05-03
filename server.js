const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const port = process.env.PORT || 4000;

app.use('/', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});