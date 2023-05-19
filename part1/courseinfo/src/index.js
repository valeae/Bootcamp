import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Content = () => {
  const lists = PartList.map (
		function(list) {
			return (
				<div>
					<Part part={list.part} exercises={list.exercises} />
				</div>
			)
		});

    return lists
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part} : {props.exercises}</p>
    </div>
  );
}

const Total = () => {
  var num = 0
	
	for (var i = 0; i < PartList.length; i++) {
		num = num + PartList[i].exercises
	}
	
	return (
		<div>
			<p>Number of exercises: {num}</p>
		</div>
	)
};

const PartList = [
  {
		part: 'Fundamentals of React',
		exercises: 10
	},
	{
		part: 'Using props to pass data',
		exercises: 7
	},
	{
		part: 'State of a component',
		exercises: 14
	}
];



const App = () => {
  const course = 'Half Stack application development'

  return (
    <div>
      <Header course={course}/>
      <Content />
      <Total />
    </div>
  )
  
};



ReactDOM.render(<App />, document.getElementById('root'))