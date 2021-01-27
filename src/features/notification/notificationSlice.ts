import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'


async function fetchDonationDataAPI() {
    const apiUrl = 'https://gist.githubusercontent.com/BrandonJF/48201d989e223c4651a880d88c139d25/raw/';
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log('This is your data', data);
    return data
}

// First, create the thunk
const fetchDonationData = createAsyncThunk(
    'donationData/fetch',
    async (thunkAPI) => {
        const response = await fetchDonationDataAPI()
        return response
    }
)

export interface notificationState {
    description: string
}

interface SliceState {
    notification: notificationState
}

const notifications = createSlice({
    name: 'notifications',
    initialState: {
        notification: {
            description: '',
        },
    } as SliceState,
    reducers: {
        setNotification: (state, action: PayloadAction<string>) => {
            state.notification = {
                description: action.payload,
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(fetchDonationData.fulfilled, (state, action) => {
            state.notification = {
                description: action.payload.description,
            }
            // both `state` and `action` are now correctly typed
            // based on the slice state and the `pending` action creator
        })
    }
})

export const { setNotification } = notifications.actions
export { fetchDonationData }

export default notifications.reducer