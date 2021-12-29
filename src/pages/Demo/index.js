import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
function Demo() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });
  const { email, username } = inputs;

  const [users, setUsers] = useState([
    // {
    //   username: '',
    //   email: '',
    //   id: '',
    // },
  ]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const nextId = useRef(0);
  const onCreate = (e) => {
    const user = {
      id: nextId.current,
      username: username,
      email: email,
    };
    setUsers([...users, user]);
    nextId.current += 1;
  };

  const onRemove = (id) => {
    console.log(id);
    setUsers(users.filter((e) => e.id !== id));
  };

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </>
  );
}

export default Demo;
