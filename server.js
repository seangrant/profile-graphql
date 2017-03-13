const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const cors = require('cors');
const app = express();

app.options('/graphql', cors())

app.use('/graphql', cors(), expressGraphQL(() => ({
    schema: schema,
    graphiql: true
})));

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('listening on 4000...');
})
