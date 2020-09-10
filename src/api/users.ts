const baseUrl = '/api/user';

async function load(token: string) {
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'x-token': token
    }
  });

  const data = await response.json();

  if (!data.users) {
    throw new Error(data.message);
  }

  return data.users;
}

async function add(token: string, name: string, password: string, email: string, role: string) {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'x-token': token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, password, email, role }),
  });

  const data = await response.json();

  if (!data.user) {
    let errors: string[] = [];
    for (let error of data.messages) {
      errors.push(error.message);
    }
    throw Error(errors.join(', '));
  }

  return data.user;
}

const users = {
  load, add,
}

export { users };
