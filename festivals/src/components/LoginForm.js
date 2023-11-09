const LoginForm = () => {
    
    const handleClick = () => {

    }

    return(
        <>
            Email: <input type="text" /> <br/>
            Password: <input type="password" /> <br/>
            <button onClick={handleClick}>Login</button>
        </>
    )
}

export default LoginForm