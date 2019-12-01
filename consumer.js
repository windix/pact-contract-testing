const axios = require('axios');

// const options = {
//   Accept: 'api_version=2',
//   headers: { 'Content-Type': 'application/graphql' }
// }

const url = `http://localhost:5000`;
// const query: `
// query PostsForAuthor {
//   author(id: 1) {
//     firstName
//       posts {
//         title
//         votes
//       }
//     }
//   }
// `

// const hello1Query = () => console.log("here") || axios.post(url, {
//     query
// }, options);

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