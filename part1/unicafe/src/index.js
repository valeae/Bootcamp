import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Statistics = ({good, neutral, bad}) => {
  const All = good + neutral + bad;
  const Average = ((good - bad)/(good + neutral + bad));
  const Positive = ((good + neutral)/(good + neutral + bad));

  if (All === 0) {
    return (
      <p>No feedback given</p>
    )
  }

  return (
    <div>
    <p>Good: {good}</p>
		<p>Neutral: {neutral}</p>
		<p>Bad: {bad}</p>

    <h2>Collection of comments</h2>
    <p>All: {All}</p>
		<p>Average: {Average}</p>
		<p>Positive: {Positive}</p>
    </div>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> Give Feedback </h1>
      <button onClick = {() => setGood(good + 1)}>Good</button>
			<button onClick = {() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick = {() => setBad(bad + 1)}>Bad</button>

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
