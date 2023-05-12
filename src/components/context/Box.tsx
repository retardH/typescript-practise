import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <>
            <div style={{
                backgroundColor: theme.primary.main,
                color: theme.primary.text,
            }}>
                <h2>Theme Context</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum omnis amet quisquam eius temporibus dignissimos distinctio similique enim dolores? Dolorum cupiditate, iure vitae deleniti impedit ducimus incidunt aliquid ipsam assumenda.</p>
            </div>
        </>
    )
}
 
export default Box;