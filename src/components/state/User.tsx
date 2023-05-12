import { useState } from "react";

interface AuthUser {
  name: string;
  email: string;
}

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogIn = () => {
    setUser({
      name: "John Doe",
      email: "upchh@example.com",
    });
  };
  return (
    <>
      <div>
        <button onClick={handleLogIn}>Log In</button>
        <>
          <h5>User is name is {user?.name}</h5>
          <h5>User is email is {user?.email}</h5>
        </>
      </div>
    </>
  );
};

export default User;
