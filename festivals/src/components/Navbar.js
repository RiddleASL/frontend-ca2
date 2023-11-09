import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <>
        <Link to={'/'}>Home</Link>|
        <Link to={'/all'}>Festivals</Link>
        </>
    )
}

export default Navbar