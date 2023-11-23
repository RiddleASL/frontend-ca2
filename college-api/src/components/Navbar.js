//import images
import {ReactComponent as Cap} from '../assets/images/Cap.svg';

//import stuff
import * as bi from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<div className="navbar dark:bg-bg-dark bg-bg-light justify-between text-3 px-10 dark:text-text-light text-text-dark">
					<Link to={'/'} className="dark:fill-white w-auto align-center"><span className='gap-3 flex'><bi.MortarboardFill className='text-2'/> NCFK</span></Link>
				<div>
					<ul className="menu menu-horizontal px-1 text-3">
                        <li>
							<Link to={'/login'}>Login</Link>
						</li>
                        <div className='border-2 rounded'/>
                        <li>
							<Link to={'/register'}>Register</Link>
						</li>
                        <div className='border-2 rounded'/>
                        <li>
							<Link to={'/contact'}>Contact</Link>
						</li>
                        <div className='border-2 rounded'/>
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
