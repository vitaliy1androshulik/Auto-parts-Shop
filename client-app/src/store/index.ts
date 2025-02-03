import { configureStore } from '@reduxjs/toolkit';
import { apiParts } from '../services/apiParts.ts';

export const store = configureStore({
    reducer: {
        [apiParts.reducerPath]: apiParts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiParts.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;