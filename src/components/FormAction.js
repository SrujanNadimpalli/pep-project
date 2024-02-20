// components/FormAction.js
import React, { useState } from 'react';

function FormAction({ setUser }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({ name, age, address, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" />
      <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email ID" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormAction;

