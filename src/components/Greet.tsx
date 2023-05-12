type GreetProps = {
  name: string;
  age: number;
  gender?: string;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <>
      <div>
        {props.isLoggedIn ? (
          <h1>
            Hello , {props.name} <br />
            Your age is {props.age} years old
          </h1>
        ) : (
          <h1>Welcome, Log In First</h1>
        )}
      </div>
    </>
  );
};

export default Greet;
