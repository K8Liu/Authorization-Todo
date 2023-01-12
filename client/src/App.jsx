import './App.css';
// import { useEffect, useState } from 'react';
import readTodosRequest from './api/readTodosRequest';
import { useQuery } from 'react-query';


function App() {


  const { isLoading, data: todos } = useQuery(
    'todos',
    readTodosRequest
  );
  
  // useEffect(() => {
  //   readTodosRequest().then(setTodos); 
  // }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        todos.map((todo) => ( 
        <div key={todo._id}>
          {todo.text}
          {`${todo.completed}`}
        </div>
      ))
      )}
    </div>
  );
}

export default App
