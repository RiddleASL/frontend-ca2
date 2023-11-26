import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
	//States
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState({});

	const [showPassword, setShowPassword] = useState(false);


	const navigate = useNavigate();

	const submitInfo = async (e) => {
		e.preventDefault()
		setError({});

		const response = null;
		
		axios.post('https://college-api.vercel.app/api/login', { email: email, password: password }).then((response) => {
			console.log(response.data);
			localStorage.setItem('token', response.data.token);
			navigate('/');
		}).catch((err) => {
			console.log(err.response.data.error);
			setError(err.response.data.error)
			console.log(error);
		})
			
	}

	const handleEmail = (e) => {
		setEmail(e.target.value);
	}

	const handlePassword = (e) => {
		setPassword(e.target.value);
	}

	return (
		<>
			<div className="dark:bg-bg-dark-alt bg-bg-light-alt py-10 dark:text-text-light text-text-dark flex">
				<div className="card w-96 dark:bg-bg-dark bg-bg-light shadow-xl my-20 mx-auto">
					<div className="card-body">
						<h2 className="card-title justify-center">Login</h2>
						<form id='login' className=" text-center" onSubmit={submitInfo}>
                            {/* Username */}
							{error.hasOwnProperty('email') ? <p className='text-red-500'>{error.email}</p> : null}
                            <input
								type="text"
								name='email'
								className="input input-bordered w-full"
								autoComplete='off'
								placeholder="Email"
								onChange={handleEmail}
							/>

                            {/* Password */}
							{error.hasOwnProperty('password') ? <p className='text-red-500'>{error.password}</p> : null}
                            <input
								type={showPassword ? "text" : "password"}
								name='password'
								className="input input-bordered w-full"
								autoComplete='off'
								placeholder="Password"
								onChange={handlePassword}
							/>
							<div className='flex items-center justify-center gap-5'>
								<label>Show Password</label>
								<input type="checkbox" className="checkbox checkbox-accent" onClick={() => setShowPassword(!showPassword)} />
							</div>
                            
							{error == "Unauthorised" ? <p className='text-red-500'>Invalid Credentials</p> : null}
                            <input type="submit" value="Login" className="btn btn-primary w-full mt-4" />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
