interface User {
  _id: string;
  name: string;
  email: string;
  role: {
    _id: string,
    name: string,
  };
}
