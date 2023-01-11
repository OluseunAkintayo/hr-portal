import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const Login = createApi({
	reducerPath: 'auth',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://employee.dreywandowski.xyz/api/',
		prepareHeaders: (headers) => {
			headers.set('Content-Type', "application/x-www-form-urlencoded");
			headers.set('Accept', "*");
			return headers;
		}
	}),
	endpoints: (build) => ({
		newUser: build.mutation({
			query: (data) => {
				return {
					url: 'employees/addEmployee',
					method: 'POST',
					body: data
				}
			},
		}),
		login: build.mutation({
			query: (data) => {
				return {
					url: 'employees/login',
					method: 'POST',
					body: data
				}
			},
		}),
	}),
});

export const { useNewUserMutation, useLoginMutation } = Login;
