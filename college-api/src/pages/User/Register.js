import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	//States
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState({});

	const [showPassword, setShowPassword] = useState(false);

	const submitInfo = async (e) => {
		e.preventDefault()
		setError({});

		axios.post('https://college-api.vercel.app/api/register', {name: name, email: email, password: password }).then((res) => {
			console.log(res.data);
		}).catch((err) => {
			console.log(err.response.data);
			setError(err.response.data)
			console.log(error);
		})
	}

	const handleName = (e) => {
		setName(e.target.value);
	}

	const handleEmail = (e) => {
		setEmail(e.target.value);
	}

	const handlePassword = (e) => {
		setPassword(e.target.value);
	}

	const handleConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	}		

	const disableButton = () => {
		if (password === '' || confirmPassword !== password || name === '' || email === '') {
			return true;
		} else {
			return false;
		}
	}

	return (
		<>
			<div className="dark:bg-bg-dark-alt bg-bg-light-alt py-10 dark:text-text-light text-text-dark flex">
				<div className="card w-96 dark:bg-bg-dark bg-bg-light shadow-xl my-20 mx-auto">
					<div className="card-body">
						<h2 className="card-title justify-center">Register</h2>
						<form id='login' className=" text-center" onSubmit={submitInfo}>
                            {/* Username */}
							{error.hasOwnProperty('name') ? <p className='text-red-500'>{error.name}</p> : null}
                            <input
								type="text"
								name='username'
								className="input input-bordered w-full"
								autoComplete='off'
								placeholder="Name"
								onChange={handleName}
							/>

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

							{confirmPassword !== password ? <p className='text-red-500'>Passwords do not match</p> : null}
							<input
								type={showPassword ? "text" : "password"}
								name='confirmPassword'
								className="input input-bordered w-full"
								autoComplete='off'
								placeholder="Confirm Password"
								onChange={handleConfirmPassword}
							/>
							<div className='flex items-center justify-center gap-5'>
								<label>Show Password</label>
								<input type="checkbox" className="checkbox checkbox-accent" onClick={() => setShowPassword(!showPassword)} />
							</div>
                            
							{error == "Unauthorised" ? <p className='text-red-500'>Invalid Credentials</p> : null}
                            <input type="submit" disabled={disableButton()} value="Login" className="btn btn-primary w-full mt-4" />
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
