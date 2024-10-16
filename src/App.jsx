import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singer from "./Singer";
import BookStore from "./BookStore";

function App() {

  const actors = ['Hrictik', 'thor', 'tom', 'captain', 'goku', 'garou'];

  const books = [
    {id: 1, name: 'physics', price: 150},
    {id: 2, name: 'math', price: 200},
    {id: 3, name: 'chemistry', price: 140},
    {id: 4, name: 'biology', price: 190},
  ]

  const singers = [
    {id: 1,name: 'weekend', age: 30},
    {id: 2, name: 'lana del ray', age: 27},
    {id: 3, name: 'billi elish', age: 33},
    {id: 4, name: 'local train', age: 28}
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

    {
      singers.map(singer => <Singer singer={singer}></Singer>)
    }

      <Actor name={"shoyon"}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }


      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="20"></Device>
      <Device name="watch" price="3"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={14} score={89}></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <h2>
      This device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 19;
  const money = 0;
  const person = { name: "Purna", age: 19 };
  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "99" };

function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRedius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Dev</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
