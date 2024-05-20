import { useState } from 'react'
import Todos from './components/Todos'

const mockTodos = [
  { id: '1', title: 'Estudiar', completed: false },
  { id: '2', title: 'Pagina Web Zapas', completed: true },
  { id: '3', title: 'Trabajar', completed: false },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  return (
    <div className="todoapp">
      <h1>Todo APP</h1>
      <Todos todos={todos} />
    </div>
  )
}

export default App
