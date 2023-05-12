import { useState } from "react"

const LogIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogIn = () => {
        setIsLoggedIn(true);
    }
    const handleLogOut = () => {
        setIsLoggedIn(false);
    }
    return (
        <>
            <div>
                <button onClick={handleLogIn}>Log In</button>
                <button onClick={handleLogOut}>Log In</button>
                <h5>User is {isLoggedIn ? "logged in" : "logged out"}</h5>
            </div>
        </>
    )
}
 
export default LogIn;