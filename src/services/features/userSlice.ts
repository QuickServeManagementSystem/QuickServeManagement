import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IUserInfo } from '../../models/UserInfor';
import axios from 'axios';
import { getAllUsersEndpoint } from '../api/apiConfig';

interface UserState {
    loading: boolean;
    users: IUserInfo[] | null;
    user: IUserInfo | null;
    error: string | null;
}

const initialState: UserState = {
    loading: false,
    users: null,
    user: null,
    error: null,
};

export const getAllUser = createAsyncThunk<IUserInfo[], void>(
    'users/getAllUser',
    async (_, thunkAPI) => {
        try {
            const token = localStorage.getItem('quickServeToken');
            const response = await axios.get(getAllUsersEndpoint, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.errorMessages || 'Unknown error',
            );
        }
    },
);

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllUser.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = null;
        });
        builder.addCase(getAllUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });
    },
});

export const { setError } = usersSlice.actions;
export default usersSlice.reducer;
