import React from 'react'

import { useAppSelector, useAppDispatch } from '../Store/hooks'

import { decrement, increment } from '../ReduxSlices/CounterSlice'
import { RootState } from '../Store/store'

export function CounterComponent() {
  const count = useAppSelector((state : RootState) => state.counter.value)
  const dispatch = useAppDispatch()
  return (<div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>decrease</button>
  </div>);
}