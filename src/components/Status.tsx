interface StatusProps {
    status: 'loading' | 'success' | 'error',

}
const Status = (props: StatusProps) => {
    let message = "";
    if(props.status === "loading") {
        message = "Loading...";
    } else if(props.status === "success") {
        message = "Data fetched";
    } else if(props.status === "error") {
        message = "Error fetching data";
    }
    return (
        <>
            <div>
                <h3>Status : {message}</h3>
            </div>
        </>
    )
}
 
export default Status;