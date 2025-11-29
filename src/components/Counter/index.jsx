import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, setStep } from '../../store/slice/counterSlice'

function Counter () {
  const dispatch = useDispatch()
  const { count, step } = useSelector(state => state.counter)

  const stepChangeHandler = ({ target: { value } }) =>
    dispatch(setStep(Number(value)))

  return (
    <div>
      Counter: {count}
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      <input type='number' value={step} onChange={stepChangeHandler} />
    </div>
  )
}

export default Counter
