// src/redux/store.ts

import { configureStore, combineReducers, createAction, createReducer, createSlice } from '@reduxjs/toolkit'
import moneyReducer, {addMoney} from './moneySlice'
import notificationReducer, {fetchDonationData} from '../features/notification/notificationSlice'
import { type } from 'os'

const increment = createAction('INCREMENT')
const decrement = createAction('DECREMENT')


function rootReducer(state = 0, action: { type: any }){
  switch(action.type){
    case increment.type:
      return state + 1
      default:
        return state
  }
}

let primaryReducer = createReducer(0, {
  [increment.type]: state => state + 1,
  [decrement.type]: state => state - 1
})

const store = configureStore({
  reducer: combineReducers({
    // your reducers goes here
    rootReducer: rootReducer,
    money: moneyReducer,
    notification: notificationReducer
  }),
})

export default store
export type AppDispatch = typeof store.dispatch
