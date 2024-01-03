import React from 'react';
import { useRouter } from 'next/router';
const Home = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Welcome to Group Chat</h1>
      <div onClick={()=>{router.push('/login')}}>Login</div>
      <div onClick={()=>{router.push('/signup')}}>Singup</div>
    </div>
  );
};

export default Home;