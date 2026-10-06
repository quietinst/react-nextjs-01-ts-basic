// Create a Post interface (id: number, title: string, body: string),
// then type axios.get so it knows the API returns an array of posts.

import axios from 'axios';

async function fetchPosts() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
}

fetchPosts().then((posts) => {
  console.log(posts[0].title);
});
