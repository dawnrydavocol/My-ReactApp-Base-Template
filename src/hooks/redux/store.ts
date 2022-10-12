import { configureStore } from '@reduxjs/toolkit';
import dashboardSlice from 'src/features/dashboard/redux-slice';
import sectorSlice from 'src/features/dashboard/components/sector_container/redux-slice';

const store = configureStore({
    reducer: {
        dashbordGIS: dashboardSlice,
        sectorGIS: sectorSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
