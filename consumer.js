const axios = require('axios');

const url = `http://localhost:5000`;

const hello1Query = () => axios({
  url,
  method: 'post',
  data: {
    query: `
    {
      hello1
    }
  `
  },
  Accept: 'api_version=2',
  headers: { 'Content-Type': 'application/json' }
}).then((result) => {
  return result.data;
});

module.exports.query = hello1Query;