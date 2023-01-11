import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';

const PrivateRoute: React.FC = () => {
	const token: string | null = localStorage.getItem('token');

	return token ? <Layout><Outlet /></Layout> : <Navigate to="/auth/login" />
}

export default PrivateRoute;
