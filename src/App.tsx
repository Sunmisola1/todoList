import { useState } from "react"
import { dummyData } from "./data/todos"
import AddToDoForm from "./component/AddToDoForm";
import TodoList from "./component/TodoList";


function App() {
const [todos, setTodos] = useState(dummyData);
function setTodoCompleted(id:number, completed:boolean){
  setTodos((prevTodos) =>
  prevTodos.map((todo) => (todo.id === id ? {...todo, completed} : todo))
  )
}

function addTodo(title: string){
  setTodos(prevTodos => [
    {
      id:prevTodos.length + 1,
      title,
      completed :false
    },
    ...prevTodos 
  ])
}

function deleteTodo(id:number){
  setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
}


  return (
   <main  className=" py-10 h-screen ">
      <h1 className="font-bold  text-3xl text-center">Your Todo </h1>
    <div className="max-w-lg mx-auto  bg-gray-100 p-4 rounded-md space-y-4">
      <AddToDoForm  onSubmit={addTodo} / >
     <TodoList 
     todos = {todos}
     onCompletedChange={setTodoCompleted }
     onDelete = {deleteTodo}
     />
    </div>
   </main>
  )
}

export default App
