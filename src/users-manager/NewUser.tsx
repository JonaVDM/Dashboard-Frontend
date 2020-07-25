import React, { useState } from 'react';
import { Btn, Color, DropDown } from '../components/components';
import { connect } from 'react-redux';
import { RootState } from '../redux/reducers';
import { TextField } from '../components/components';

interface Props {
  token: string,
}

function NewUser({ token }: Props): JSX.Element {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [role] = useState('normal');

  function enabled(): boolean {
    return name !== '' && email !== '' && password !== '';
  }

  async function create() {
    await fetch('/api/user', {
      method: 'POST',
      headers: {
        'x-token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, password, email, role }),
    });
  }

  return (
    <div>
      <TextField label="Name" onChange={(ev) => setName(ev.target.value)} />
      <TextField label="Email" onChange={(ev) => setEmail(ev.target.value)} />
      <TextField label="Password" type="password" onChange={(ev) => setPassword(ev.target.value)} />
      <DropDown />
      <Btn disabled={!enabled()} color={Color.Success} onClick={create}>Create</Btn>
    </div>
  );
}

function mapState(state: RootState) {
  return {
    token: state.auth.token,
  }
}

export default connect(mapState)(NewUser);
