async function login(email: string, password: string) {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  return data;
}

async function me(token: string) {
  const response = await fetch('/api/me', {
    headers: {
      'x-token': token,
    },
  });

  const data = await response.json();

  if (!data.user) {
    return false;
  } else {
    return data.user;
  }
}

const auth = {
  login, me
}

export { auth };
