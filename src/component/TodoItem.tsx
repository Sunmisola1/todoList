import { Trash2 } from "lucide-react";
import { Todo } from "../types/todos";

interface Todoitemprops{
    todo: Todo;
    onCompletedChange:(id:number, coompleted:boolean) =>void;
    onDelete: (id:number) => void;
}

export default function TodoItem({ todo , onCompletedChange, onDelete} :Todoitemprops){
    return(
        <div className="flex items-center gap-1">
           
           <label className="flex items-center gap-2 rounded-md p-2 border-gray-300 border grow ">
            <input type="checkbox"
            checked = {todo.completed}
            onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
            className="scale-125" />
            <span className={todo.completed ? "line-through text-gray-400" :""} > {todo.title}</span>
           </label>
           <button onClick={() => onDelete(todo.id)}
            className="p-2" > 
            <Trash2 size={20} className="text-gray-500" />
            </button>
        </div>
    )
}