//import images
import {ReactComponent as Cap} from '../assets/images/Cap.svg';
import {useLocation} from 'react-router-dom';

//import stuff
import * as bi from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Navbar = () => {
	let location = useLocation();

	useEffect(() => {
		window.scrollTo({top: 0, behavior: 'smooth' });
	}, [location]);

	const navbarLinks = () =>{
		if(localStorage.getItem('token') == null){
			return(
				<>
					<li>
						<Link to={'/login'}>Login</Link>
					</li>
                    <div className='border-2 rounded dark:border-bg-light border-bg-dark'/>
                    <li>
						<Link to={'/register'}>Register</Link>
					</li>
				</>
			)
		} else {
			return(
				<>
					<li>
						<Link to={'/logout'}>Logout</Link>
					</li>
                    <div className='border-2 rounded dark:border-bg-light border-bg-dark'/>
                    <li>
						<Link to={'/courses'}>Courses</Link>
					</li>
				</>
			)
		}
	}

	return (
		<>
			<div className="navbar dark:bg-bg-dark bg-bg-light justify-between text-3 py-3 px-10 dark:text-text-light text-text-dark">
					<Link to={'/'} className="dark:fill-white w-auto align-center"><span className='gap-3 flex'><bi.MortarboardFill className='text-2'/> NCFK</span></Link>
				<div>
					<ul className="menu menu-horizontal px-1 text-3">
                        {navbarLinks()}
                        <div className='border-2 rounded dark:border-bg-light border-bg-dark'/>
                        <li>
							<Link to={'/contact'}>Contact</Link>
						</li>
                        <div className='border-2 rounded dark:border-bg-light border-bg-dark'/>
                        <li>
							<Link to={'/about'}>About</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Navbar;
