// components/Home.js
import React from 'react';

function Home({ user }) {
  return (
    <div>
      <h1>Home</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Address: {user.address}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Home;
