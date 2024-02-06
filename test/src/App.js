import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Test2 from './Test2'
export default function App() {

  const[todos , setTodos] = useState([]);
  async function getTodos() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.data;

    // todos.forEach(todos => {
    //   const titles = todos.title;
    //   console.log(titles);   
    // });
    setTodos(todos);
  }

  getTodos();

  return (
    <div className="App">
      <Test2 data={todos}/>
    </div>
  );
}

// import { useState } from 'react';
// import { useEffect } from 'react';
// import './App.css';
// import axios from 'axios';
// import Todos from './Todos';

// function App() {

//   const [todos, setTodos] = useState([]);

//   async function getTodos() {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
//     const todos = await response.data;

//     console.log(todos);
//     setTodos(todos);
//   }

//   useEffect(() => {
//     getTodos();
//   }, []);

//   return (
//     <div className="App">

//     </div>
//   );
// }

// export default App;