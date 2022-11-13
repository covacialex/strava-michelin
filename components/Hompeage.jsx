import React, { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Hompeage = () => {
  const { data } = useSession();
  console.log(data);

  return (
    <div>
      <button onClick={() => signIn()}>Sign in</button>
      <button onClick={() => signOut()}>Sign out</button>
      <h1>Welcome {data ? data.user.name : "Not working"}</h1>
    </div>
  );
};

export default Hompeage;
