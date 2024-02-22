import { createAction, createReducer } from '@reduxjs/toolkit'

export const changeCurrentPlayer = createAction('CHANGE_CURRENT_PLAYER')
export const changeIsGameEnded = createAction('CHANGE_IS_GAME_ENDED')
export const changeIsDraw = createAction('CHANGE_IS_DRAW')
export const changeField = createAction('CHANGE_FIELD')
export const initState = createAction('INIT_STATE')


export const initialState = {
  currentPlayer: 'X',
  isGameEnded: false,
  isDraw: false,
  field: [['', '', ''],['', '', ''],['', '', '']]
}

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCurrentPlayer, (state) => {
      state.currentPlayer = state.currentPlayer === 'X' ? '0' : 'X'
    })
    .addCase(changeIsGameEnded, (state) => {
      state.isGameEnded = true
    })
    .addCase(changeIsDraw, (state) => {
      state.isDraw = true
    })
    .addCase(changeField, (state, action) => {
      state.field = state.field.map((initLine, initLineIndex) => {
        return initLine.map((initButton, initButtonIndex) => {
            if ((action.payload[0] === initLineIndex) && (action.payload[1] === initButtonIndex)){
                return state.currentPlayer
            } else {
                return initButton
            }    
        })
      })
    })
    .addCase(initState, (state) => {
      state.currentPlayer = initialState.currentPlayer
      state.isGameEnded = initialState.isGameEnded
      state.isDraw = initialState.isDraw
      state.field = initialState.field
    })
})

