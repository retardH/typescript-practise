interface ButtonProps {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,

}

const Button = (props: ButtonProps) => {
    return (
        <>
            <button onClick={(event) => props.handleClick(event, 10)}>Click</button>
        </>
    )
}
 
export default Button;