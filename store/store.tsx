import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import counterReducer from '../components/shared/counterSliceReducer';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
