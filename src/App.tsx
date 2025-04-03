import { JSX, useState } from "react"
import { Todos } from "./components/Todos"
//SE CREO 3 TODOS PARA RENDERIZAR 
const mockTodos =[
  {
  id: '1',
  title: 'todo 1',
  completed:false,
  },

  {
  id: '2',
  title: 'todo 2',
  completed:false,
  },

  {
  id: '3',
  title: 'todo 3',
  completed:false,
  },

]

const App = (): JSX.Element => { //ESTA FUNCION ES UN JSX 
  const [todos] = useState(mockTodos) //con useState SE SABE QUE ES UN ARRAY
  return (
    <Todos todos= {todos}/>
  )
}

export default App
