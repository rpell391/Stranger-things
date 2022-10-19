import { Posts, Register } from "../components";

const BASE_URL = 'https://strangers-things.herokuapp.com'
// export async function getPosts() {
//   const response = await fetch(`${BASE_URL}/api/2209-ftb-et-web-ft/posts`);
//   const result = await response.json()
//   const posts = result.data.posts
//   return posts
// }

export async function registerUser (username, password) {
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        username,
        password
      }

  })
}

  const response = await fetch(`${BASE_URL}/api/2209-ftb-et-web-ft/users/register`, options)
  const result = await response.json()
  return result.data
}