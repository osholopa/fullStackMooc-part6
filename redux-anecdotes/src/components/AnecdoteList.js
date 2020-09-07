import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addVote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  clearNotification,
} from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector((state) => {
    return state.filter !== 'ALL'
      ? state.anecdotes.filter((anecdote) =>
          anecdote.content.toUpperCase().includes(state.filter.toUpperCase())
        )
      : state.anecdotes
  })
  const dispatch = useDispatch()

  const vote = (id) => {
    dispatch(addVote(id))
    dispatch(
      setNotification(
        `You voted '${anecdotes.find((a) => a.id === id).content}'`
      )
    )
    setTimeout(() => dispatch(clearNotification()), 5000)
  }

  return (
    <div>
      {anecdotes
        .sort((a, b) => (a.votes > b.votes ? -1 : 1))
        .map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default AnecdoteList
