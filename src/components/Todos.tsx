import { type ListOfTodos } from "../types"
import { Todo } from "./Todo"

 interface Props {
    todos: ListOfTodos
 }

 //FC: fashion component
 //<Props>: es una forma de pasarle parametros a los tipos es como decir el parametro de los tipos
 //el FC las props que vamos a pasar son las que tienen esta forma:

 //type ListOfTodos = Todo[]
 //interface Props {
 //   todos:ListOfTodos
 //}    

 //tipado de FC: fashon components

export const Todos: React.FC<Props> = ({todos}) => {
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`} > 
                <Todo
                    key={todo.id}
                    id={todo.id}
                    title={todo.title}
                    completed={todo.completed}
                
                
                />
                </li>
            ))}
        </ul>
    )
}