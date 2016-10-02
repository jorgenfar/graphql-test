import graphqlHTTP from 'express-graphql';
import express from 'express';

import schema from './schema';

const app = express();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV !== 'production',
}));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server listening on port ${port}.`);
});
