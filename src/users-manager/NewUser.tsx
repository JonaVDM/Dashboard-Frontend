import React, { useState, useEffect } from 'react';
import { Btn, Color, DropDown } from '../components/components';
import { TextField } from '../components/components';

interface Props {
  token?: string,
  onError: (message: { key: string, message: string }[]) => void,
  onMessage: (message: string) => void,
  roles: string[],
}

export default function NewUser({ token = 'develop', onError, onMessage, roles }: Props): JSX.Element {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [role, setRole] = useState('normal');

  let [options, setOptions] = useState<{ label: string, value: string }[]>([]);

  useEffect(() => {
    let optionList = [];
    for (let role of roles) {
      optionList.push({ label: role, value: role });
    }
    setOptions(optionList);
  }, [roles]);

  function enabled(): boolean {
    return name !== '' && email !== '' && password !== '';
  }

  async function create() {
    try {
      let res = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'x-token': token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password, email, role }),
      });

      let data = await res.json();

      if (data.messages) {
        return onError(data.messages);
      } else {
        return onMessage(`Created user ${data.user.name}`);
      }
    } catch (e) {
      onError(e.message);
    }
  }

  return (
    <div>
      <TextField label="Name" onChange={(ev) => setName(ev.target.value)} />
      <TextField label="Email" onChange={(ev) => setEmail(ev.target.value)} />
      <TextField label="Password" type="password" onChange={(ev) => setPassword(ev.target.value)} />
      <DropDown label="Role" options={options} selected={role} onChange={(ev) => { setRole(ev.target.value) }} />
      <Btn disabled={!enabled()} color={Color.Success} onClick={create}>Create</Btn>
    </div>
  );
}
