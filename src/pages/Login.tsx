import React from 'react';
import styled from '@emotion/styled';
import { Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { TextInput } from '../lib/nodes';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../lib/store/api/auth';
import axios from 'axios';

type Props = {}
interface InputValues {
	username: string;
	password: string;
}

const Login: React.FC = (props: Props) => {
	const navigate = useNavigate();
	const init: InputValues = { username: '', password: '' };
	const validate = Yup.object().shape({
		username: Yup.string().trim().required('Username is required'),
		password: Yup.string().trim().required('Password is required'),
	});

	const [loading, setLoading] = React.useState<boolean>(false);
	const [error, setError] = React.useState<string | null>(null);

	const submitForm = async (data: InputValues): Promise<void> => {
		setLoading(true);
		let headersList = {
			"Accept": "*/*",
			"Content-Type": "application/x-www-form-urlencoded" 
		 }
		 let bodyContent = `username=${data.username}&password=${data.password}`;
		 let reqOptions = {
			url: "http://employee.dreywandowski.xyz/api/employees/login",
			method: "POST",
			headers: headersList,
		  data: bodyContent,
		}
		try {
			let response = await axios.request(reqOptions);
			if(response.status === 200) {
				setLoading(false);
				localStorage.setItem('token', response?.data?.accessToken);
				localStorage.setItem('tokenExpiration', response?.data?.expiresAt);
				localStorage.setItem('user', JSON.stringify(response?.data?.user));
				navigate("/");
			} else {
				setLoading(false);
				setError(response?.data?.message);
			}
		} catch (error: any) {
			setError(() => error?.response ? "Error " + error?.response?.status + ": " + error?.response?.data?.message : error.message);
			setLoading(false);
			console.log(error);
		}
	};

	return (
		<Paper sx={{ boxShadow: 0, height: '100vh', display: 'flex' }}>
			<L2>
				<img src="/img/login-img.svg" alt="login-img" draggable="false" />
			</L2>
			<L1>
				<FormWrapper>
					<Formik
						initialValues={init}
						validationSchema={validate}
						onSubmit={(values) => submitForm(values)}
					>
						{() => (
							<Form>
								<Box sx={{ display: 'grid', gap: '1rem' }}>
									<Typography variant="h5">Login to Dashboard</Typography>
									<TextInput label="Username" name="username" disabled={loading} />
									<TextInput label="Password" type="password" name="password" disabled={loading} />
									{ error && <Typography className='errorText'>{error}</Typography> }
									<Button type="submit" disabled={loading} variant="contained" fullWidth sx={{ height: '3.5rem' }}>
										{
											loading ?
											<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Typography>Logging in</Typography><CircularProgress size="1.25rem" /></Box>
											: 'Login'
										}
									</Button>
								</Box>
							</Form>
						)}
					</Formik>
					<Links>
						<Button href="/auth/register">Sign Up</Button>
						<Button href="/auth/reset-password">Forgot password</Button>
					</Links>
				</FormWrapper>
			</L1>
		</Paper>
	)
}

export default Login;

const L1 = styled.div`
	background-color: #2F434C;
	width: 50vw;
	height: 100vh;
	display: grid;
	place-items: center;
`;
const L2 = styled.div`
	width: 50vw;
	height: 100vh;
	background-color: #F5F5F5;
	display: grid;
	place-items: center;
	img {
		width: 80%;
		max-width: 600px;
	}
`;

const FormWrapper = styled.div`
	width: 100%;
	max-width: 400px;
	background-color: #F5F5F5;
	padding: 2rem;
	border-radius: 0.25rem;
	box-shadow: 2px 2px 3px 0px rgba(47,52,60,0.78);
	-webkit-box-shadow: 2px 2px 3px 0px rgba(47,52,60,0.78);
	-moz-box-shadow: 2px 2px 3px 0px rgba(47,52,60,0.78);
`;

const Links = styled.div`
	display: flex;
	gap: 1rem;
	justify-content: space-between;
	margin-top: 1rem;
`;