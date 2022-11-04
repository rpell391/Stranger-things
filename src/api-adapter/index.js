import { Posts, Register } from "../components";

const BASE_URL = "https://strangers-things.herokuapp.com";

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

export async function userProfile(token) {
  const options = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
}
const response = await fetch(
  `${BASE_URL}/api/2209-ftb-et-web-ft/users/me`,
  options
);
const result = await response.json();
// console.log(result.data)
return result.data
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

export async function sendMessage(id, token, content) {
  console.log("I am about to see a message here", id, token, content)
  const response = await fetch(
    `https://strangers-things.herokuapp.com/api/2209-ftb-et-web-ft/posts/${id}/messages`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({
        message: {
          content,
        },
      }),
    }
  );
  const result = await response.json();
  return result.data;
}

