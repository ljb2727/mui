import React, { useState } from 'react';

export default function Demo({ props }) {
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

  console.log(props);

  return (
    <div>
      <input type="text" name="name" onChange={onChange} />
      <input type="text" name="nickname" onChange={onChange} />
      <div onClick={() => props}>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}
