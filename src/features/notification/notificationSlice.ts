import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
})

export const { setNotification } = notifications.actions
export default notifications.reducer