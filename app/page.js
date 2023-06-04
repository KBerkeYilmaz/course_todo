'use client'

import { useState } from 'react';
import TodoForm from "./components/Form/TodoForm";
import TodoList from './components/List/TodoList';

const DUMMY_TODO = [
  {
  id:0,
  title: 'Be Productive'  
}];

export default function Home() {
  
  const [todoList, setTodoList] = useState(DUMMY_TODO)

  const todoChangeHandler = (event) =>  {
        setTodoList((prevTodo) =>{
        return [event,...prevTodo]
        
      })
      
  }
  console.log(todoList)
  
  return (
      <main className="
      w-screen 
      min-h-screen 
      flex 
      flex-col 
      items-center 
      justify-start 
      bg-slate-500">
        <TodoForm onTodoChange={todoChangeHandler}/>
        <TodoList items={todoList}/>
      </main>
      )
}
