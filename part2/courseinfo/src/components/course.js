import React from "react";

function Course({course}) {
    return (
      <>
        <Header name={course.name} />
        <Content parts={course.parts} />
      </>
    );
  }
  
const Header = ({name}) => {
    
    return <h1>{name}</h1>;
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


export default Course;
