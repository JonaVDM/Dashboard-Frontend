import { Card, Sizes, Color, Alert, Filter } from '../components/components';
import NewUser from './NewUser';
import React, { useState, useEffect } from 'react';
import UserList from './UserList';

interface Props {
  token?: string,
}

export default function UsersManager({ token = 'dev' }: Props): JSX.Element {
  let [users, setUsers] = useState<User[]>([]);
  let [message, setMessage] = useState<string>();
  let [color, setColor] = useState<Color>(Color.Success);
  let [roles, setRoles] = useState<string[]>([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { loadUsers(); loadRoles() }, []);

  async function loadUsers() {
    let request = await fetch('/api/user', {
      headers: {
        'x-token': token,
      }
    });

    let data = await request.json();
    if (data.users) {
      setUsers(data.users);
    } else {
      setMessage(data.message);
    }
  }

  async function loadRoles() {
    let request = await fetch('/api/role', {
      headers: {
        'x-token': token,
      }
    });

    let data = await request.json();

    if (data.message) {
      setMessage(data.message);
    } else {
      let roleList = [];
      for (let role of data.roles) {
        roleList.push(role.name);
      }
      setRoles(roleList);
    }
  }

  function onMessage(message: string) {
    setMessage(message);
    setColor(Color.Success);
  }

  function onError(messages: { key: string, message: string }[]) {
    let messageList: string[] = [];
    messages.forEach(({ key, message }) => messageList.push(`${key}: ${message}`));
    setMessage(messageList.join(', '));
    setColor(Color.Danger);
  }

  return (
    <div className="grid">

      <Card size={Sizes.full}>
        <p className="h1">User Manger</p>
      </Card>

      {message && (
        <Alert color={color} onClose={() => setMessage('')}>{message}</Alert>
      )}

      <Card size={Sizes.half}>
        <p className="h2 pad-bottom">New</p>
        <NewUser onError={onError} onMessage={onMessage} roles={roles} />
      </Card>

      <Card size={Sizes.three_quarters}>
        <UserList />
      </Card>

      <Card size={Sizes.quarter}>
        <p className="h2 pad-bottom">Filter</p>
        <Filter data={users} onFilter={() => { }} columns={['name']} />
      </Card>
    </div>
  );
}
