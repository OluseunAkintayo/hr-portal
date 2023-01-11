import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { Login } from "./api/auth";

const store = configureStore({
	reducer: {
		[Login.reducerPath]: Login.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat([
		Login.middleware
	]),
});

setupListeners(store.dispatch);

export default store;