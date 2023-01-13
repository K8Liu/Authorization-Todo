import React from "react";
import { useQuery } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

import readTodosRequest from '../api/readTodosRequest';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoForm } from '../components/CreateTodoForm';

export const TodoPage = () => {

  const { isLoading, data: todos } = useQuery(
    'todos',
    readTodosRequest
  );

  return (
    <div>
      <h1>Café Checklist</h1>
        {isLoading ? (
          <ClipLoader size = {150} />
        ) : (
          todos.map((todo) => ( 
            <TodoItem todo = {todo} key = {todo._id} />
          ))
        )}
        <CreateTodoForm/>
      </div>
  );
}