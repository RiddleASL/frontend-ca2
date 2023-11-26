const Logout = () => {
    useEffect(() => {
        localStorage.removeItem('token');
        history.push('/');
    }, [history]);

    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <div className='text-5xl text-text-dark dark:text-text-light'>
                    Logging out...
                </div>
            </div>
        </>
    );
};