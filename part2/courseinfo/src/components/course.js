import React from "react";

function Course({course}) {
    return (
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <Total total={course.parts}/>
      </>
    );
  }
  
const Header = ({name}) => {
    
    return <h2>{name}</h2>;
  };
  
const Content = ({parts}) => {
    return( 
        <>
        {parts.map(part => 
            <Part key={part.id} part={part.name} exercises={part.exercises}/>
        )}
        </>
    )
};

const Part = ({part, exercises}) => {
    return (
        <>
        <p>{part} : {exercises}</p>
        </>
    )
};

const Total = ({total}) => {
  const result = total.reduce((sum, part) => 
    {
      return sum + part.exercises
    }, 0)

  return (
    <>
    <p>
      <strong>Total of {result} exercises</strong>
    </p>
    </>
  )
};

export default Course;
