import { Posts, Register } from "../components";

const BASE_URL = "https://strangers-things.herokuapp.com";
// export async function getPosts() {
//   const response = await fetch(`${BASE_URL}/api/2209-ftb-et-web-ft/posts`);
//   const result = await response.json()
//   const posts = result.data.posts
//   return posts
// }

export async function registerUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  //replace register with login for login function
  const response = await fetch(
    `${BASE_URL}/api/2209-ftb-et-web-ft/users/register`,
    options
  );
  const result = await response.json();
  return result.data;
}

export async function loginUser(username, password) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user: {
        username,
        password,
      },
    }),
  };
  const response = await fetch(
    `${BASE_URL}/api/2209-ftb-et-web-ft/users/login`,
    options
  );
  const result = await response.json();
  return result.data;
}

export async function createPost(
  token,
  title,
  description,
  price,
  willDeliver
) {
  const response = await fetch(
    "https://strangers-things.herokuapp.com/api/2209-ftb-et-web-ft/posts",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        post: {
          title,
          description,
          price,
          willDeliver,
        },
      }),
    }
  );
  const result = await response.json();
  return result.data;
}

// export async function updatePost(
//   title,
//   description,
//   location,
//   price,
//   willDeliver,
//   id,
//   token
// ) {
//   const options = {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       title,
//       description,
//       location,
//       price,
//       willDeliver,
//     }),
//   };
//   const response = await fetch(
//     `${BASE_URL}/api/${COHORT}/posts/${id}`,
//     options
//   );
//   const result = await response.json();
//   return result;
// }
export async function deletePost(id, token) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await fetch(
    `${BASE_URL}/api/2209-ftb-et-web-ft/posts/${id}`,
    options
  );
  const result = await response.json();
  return result;
}
