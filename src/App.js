import "./App.css";
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
// import {Footer} from "./MyComponents/Footer"
import { Footer2 } from "./MyComponents/Footer2";
import { AddTodo2 } from "./MyComponents/AddTodo2";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import '../src/MyComponentsCss/style.css'
// import { Footer2 } from "./MyComponents/Footer2";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    // deleting this way in React does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    // there we call setTodos
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo2 = (title, desc) => {
    console.log("i am adding todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo2 = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo2]);
    console.log(myTodo2);
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          <Route exact path="/" element={

                <>
                  <section className="HomeContainer">
                    <AddTodo2 addTodo2={addTodo2} />
                    <Todos todos={todos} onDelete={onDelete} />
                  </section>
                </>
            }>
          </Route>

          <Route exact path="/about" element={<About />}></Route>
        </Routes>
        <Footer2 company=" Extra" Home="Home"  aboutUs="About Us" followUs="Follow Us"/>
      </Router>
    </>
  );
}

export default App;
