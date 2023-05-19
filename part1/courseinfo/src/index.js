import React from 'react'
import ReactDOM from 'react-dom'


const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Content = ({part1, part2, part3, excercises1,  excercises2,  excercises3}) => {
  return (
   <div>
      <p> {part1.name}: {excercises1} </p>
      <p> {part2.name}: {excercises2} </p>
      <p> {part3.name}: {excercises3} </p>
   </div>
  );
};

const Total = ({excercises1, excercises2, excercises3}) => {
	return (
		<div>
			<p>Number of exercises: {excercises1 + excercises2 + excercises3} </p>
		</div>
	)
};



const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} excercises1={part1.exercises} excercises2={part2.exercises} excercises3={part3.exercises}/>
      <Total excercises1={part1.exercises} excercises2={part2.exercises} excercises3={part3.exercises}/>
    </div>
  )
  
};



ReactDOM.render(<App />, document.getElementById('root'))