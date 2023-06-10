'use client'

import { useState } from 'react';
import TodoForm from "./components/Form/TodoForm";
import TodoList from './components/List/TodoList';
import Main from './components/UI/Main';


export default function Home() {
  
  const [todoList, setTodoList] = useState([])


  const todoChangeHandler = (event) =>  {
        setTodoList((prevTodo) =>{
        return [event,...prevTodo]
        
      })
  }

  const todoDeleteHandler = (removedTodo) => {
        setTodoList((prevTodos)=> {
        const updatedList = prevTodos.filter((todo) => {
                            return todo.id !== removedTodo
                            })
                            return updatedList
                    })
  }

  if(todoList.length > 0) {
  return (

      
      <Main> 
        <TodoForm onTodoChange={todoChangeHandler}/>
        <TodoList items={todoList} onTodoRemove={todoDeleteHandler}/>
      </Main>
      )
} else {
      return (
      <Main>
      <TodoForm onTodoChange={todoChangeHandler}/>
      
      <div className='
      w-[40%]
      min-h-[60%]
      flex
      flex-col
      bg-slate-300
      rounded-lg
      p-10
      mb-10
      text-slate-200
      
      '
      ><p className='bg-red-700 w-full
      h-full
      p-10
      flex
      justify-center
      items-center
      rounded-lg
      text-3xl
      '
      >Nothing ToDo</p>
      </div>
      </Main>
      )
}
}