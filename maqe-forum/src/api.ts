import axios from 'axios';

export async function getPosts() {
  const responseAuthors = (await axios.get('http://maqe.github.io/json/authors.json')).data;
  const responsePosts = (await axios.get('http://maqe.github.io/json/posts.json')).data;

  const joined = responsePosts.map((post: any) => ({
    ...post,
    author: {
      ...responseAuthors.find((author: any) => author.id === post.author_id)
    }
  }));

  return joined;
}
