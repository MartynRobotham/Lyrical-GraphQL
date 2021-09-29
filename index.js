const app = require('./server/server');

app.listen(4000, () => {
  console.log('Listening -> App is running on localhost:4000');
  console.log('Listening -> GraphiQL is running on localhost:4000/graphql');
});
