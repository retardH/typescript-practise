import { useState } from "react";
import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonLIst";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import User from "./components/state/User";
import Counter from "./components/Counter";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import User2 from "./components/context/User";

function App() {
  const [count, setCount] = useState(0);
  const addNumber = (a: number, b: number) => {
    return a + b;
  };
  const personName = {
    first: "Ryan",
    last: "Gosling",
  };
  return (
    <>
    <UserContextProvider>
      <User2/>
    </UserContextProvider>
    {/* <ThemeContextProvider>
      <Box/>
    </ThemeContextProvider> */}
      {/* <Container style={{border: "1px solid black", padding: "10px"}}/>
    <Person name={personName}/> */}
      {/* <Greet name="Zarni" age={19} isLoggedIn={true}/>
    <Counter/>

      <Status status='success'/>
      <Heading>
        Placeholder Text
      </Heading>
      <Oscar>
        <Heading>
        Oscar goes to Ryan Gosling
        </Heading>
      </Oscar>
      <Button handleClick={(event, id) => console.log("clicked",event, id)}/>
       <Input value="email"/>

       */}
    </>
  );
}

export default App;
