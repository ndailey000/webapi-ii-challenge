const server = require('./server.js');
// this is how you inport the server like 
// import server from './server.js' in react.
server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});