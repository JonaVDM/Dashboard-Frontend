import React from 'react';

interface Props {
  name?: string
}

export default function Home({ name = 'Jona' }: Props) {
  return (
    <h1>Hello {name}</h1>
  );
}
