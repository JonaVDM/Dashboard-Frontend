async function load(token: string) {
  const response = await fetch('/api/user', {
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

const users = {
  load
}

export { users };
