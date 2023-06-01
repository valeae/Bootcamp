import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({handleClick, text}) => {
  return (
    <div>
      <button onClick = {handleClick}>{text}</button>
    </div>
  )
};

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

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
     <StatisticLine text="Good: " value={good}/>
     <StatisticLine text="Neutral: " value={neutral}/>
     <StatisticLine text="Bad: " value={bad}/>

    <h2>Collection of comments</h2>

    <StatisticLine text="All: " value={All}/>
    <StatisticLine text="Average: " value={Average}/>
    <StatisticLine text="Positive: " value={Positive}/>
    </div>
  )
};


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = () => {setGood(good + 1)}
  const setToNeutral = () => {setNeutral(neutral + 1)}
  const setToBad = () => {setBad(bad + 1)}

  return (
    <div>
      <h1> Give Feedback </h1>
      <div>
        <Button handleClick={setToGood} text="Good" />
        <Button handleClick={setToNeutral} text="Neutral" />
        <Button handleClick={setToBad} text="Bad" />
      </div>
      

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
