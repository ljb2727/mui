import React, { useState } from 'react';

export default function Demo() {
  const [text, setText] = useState({
    name: '',
    nickname: '',
  });
  const { name, nickname } = text;

  const onChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };
  return (
    <div>
      <input type="text" name="name" onChange={onChange} />
      <input type="text" name="nickname" onChange={onChange} />
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
