import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return (
    <button onClick = {handleClick}> {text} </button>
  )
}


const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))
  
  const setToSelected = () => {setSelected(Math.floor(Math.random() * anecdotes.length))}
  const setToVote = () => {setVotes({...votes, [selected] : votes[selected] +1})}

  const MostVoted = () => {
    var max = 1, maxVotes = 1
      
      for(var vote in votes) {
        if (votes[vote] > max) {
          maxVotes = vote
          max = votes[vote]
        }
      }
      return maxVotes
  }

  return (
    <div>
      <h1>Anecdotes</h1>
      <Button handleClick={setToSelected} text="¡Click Me!"/>
      <Button handleClick={setToVote} text="Like"/>
      
      <p>{anecdotes[selected]}</p>
      <p>This has: {votes[selected]} votes</p>

      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[MostVoted()]}</p>
      <p>This has {votes[MostVoted()]} total votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
