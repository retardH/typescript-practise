import { useContext } from "react"
import { UserContext } from "./UserContext"

const User2 = () => {
    const userContext = useContext(UserContext);
    const handleLogIn = () => {
        if(userContext) {
            userContext.setUser({
                name: "HtetZarni",
                email: "hzrni.dev@gmail.com",
            })
        }
    }
    const handleLogOut = () => {
        if(userContext) {
            userContext.setUser(null);
        }
    }
    return (
        <>
              <div>
                <button onClick={handleLogIn}>Log In</button>
                <button onClick={handleLogOut}>Log Out</button>
                <h5>Username is {userContext.user?.name}</h5>
                <h5>Useremail is {userContext.user?.email}</h5>
            </div>
        </>
    )
}
 
export default User2;