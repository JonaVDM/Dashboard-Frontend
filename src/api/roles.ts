async function load(token: string) {
  const response = await fetch('/api/role', {
    method: 'GET',
    headers: {
      'x-token': token
    }
  });

  const data = await response.json();

  if (!data.roles) {
    throw new Error(data.message);
  }

  return data.roles;
}

let roles = {
  load,
}

export {
  roles
}
