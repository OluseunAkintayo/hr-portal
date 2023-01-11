import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {}

const Error = (props: Props) => {
	return (
		<Box sx={{ width: '100%', height: '100vh', backgroundColor: '#F5F5F5', display: 'grid', placeItems: 'center' }}>
			<Box sx={{ p: 2 }}>
				<Typography variant="h4" sx={{ color: '#707070', textAlign: 'center' }}>
					404 Error: Page not found
				</Typography>
				<Typography sx={{ textAlign: 'center' }}>Click <Link to="/" style={{ color: '#AA0006' }}>here</Link> to go back to the homepage.</Typography>
			</Box>
		</Box>
	)
}

export default Error;