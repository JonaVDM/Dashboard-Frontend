function login() {

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
