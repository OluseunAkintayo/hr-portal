import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import { Container } from '@mui/system';

const Main = styled.main`
	max-width: 1536px;
	/* min-height: calc(100vh - 48px); */
	margin: 0 auto 0 auto;
`;

type Props = {
	children: React.ReactNode
}

const Layout = (props: Props) => {
	return (
		<React.Fragment>
			<Header />
			<Container sx={{ pl: { xs: 2 }, pr: { xs: 2 }, height: 'calc(100vh - 48px)', background: 'pink' }} maxWidth="xxl">
				{ props.children }
			</Container>
		</React.Fragment>
	)
}

export default Layout;