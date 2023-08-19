import { React, useState, useEffect } from 'react';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import { About } from './MyComponents/About';
import { TodoForm } from './MyComponents/TodoForm';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

function App() {
  let initTodo;
  localStorage.getItem("todos") === null ? initTodo = [] : initTodo = JSON.parse(localStorage.getItem("todos"));

  const delFun = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.setItem("todo", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    var sno;
    todos.length === 0 ? sno = 1 : sno = todos[todos.length - 1].sno + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title={"MeriList"} searchBar={false} />
        <Switch>
          <Route exact path="/" element={
            <>
              <TodoForm addTodo={addTodo} />
              <Todos todos={todos} del={delFun} />
            </>
          } />

          <Route exact path="/about" element={<About />} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
