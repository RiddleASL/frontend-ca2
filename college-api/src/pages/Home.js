//import images
import {ReactComponent as StudentStudying} from '../assets/images/StudentStudying.svg';
import * as bi from 'react-bootstrap-icons';

const Home = () => {
	return (
		<div className="dark:bg-bg-dark-alt bg-bg-light-alt pt-5 dark:text-text-light text-text-dark flex gap-10">
			<div>
				<StudentStudying/>
			</div>
			<div className='border-2 rounded dark:border-text-light border-text-dark mb-5'/>
			<div className='text-3 text-center mx-auto pe-5 py-16'>
				<p>Start your college journey with</p>
				<span className='gap-3 flex justify-center'><bi.MortarboardFill className='text-2'/> NCFK</span>
				<hr className='border-2 rounded my-10 w-1/4 mx-auto'/>
				<p>Register and Enrol now to officially become one of our many real** students!  </p>
				<hr className='border-2 rounded my-10 w-1/4 mx-auto'/>
				<p>Login / Register to view courses, course details, lecturers in courses and more!</p>
				<hr className='border-2 rounded my-10 w-1/4 mx-auto'/>
				<button className='btn btn-primary font-normal text-3 p-2 px-5 btn-primary-auto border-2 '>Register</button>
			</div>
		</div>
	);
};

export default Home;
