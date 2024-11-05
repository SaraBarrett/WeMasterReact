
export default function LoginBtn({children, eventHandler}){

    return (
        <button onClick={eventHandler}>{children}</button>
        )
}