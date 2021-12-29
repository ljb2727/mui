import React from 'react';

const CreateUsers = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <input type="text" name="username" value={username} onChange={onChange} />
      <input type="text" name="email" value={email} onChange={onChange} />
      <button onClick={onCreate}>click</button>
      <div>
        {username} / {email}
      </div>
    </div>
  );
};

export default CreateUsers;
