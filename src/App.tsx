import { useState } from 'react'
import Todos from './components/Todos'
import { type TodoId, type TodoCompleted } from './types'

const mockTodos = [
  { id: '1', title: 'Estudiar', completed: false },
  { id: '2', title: 'Pagina Web Zapas', completed: true },
  { id: '3', title: 'Trabajar', completed: false },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed,
  }: {
    id: TodoId
    completed: TodoCompleted
  }): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <h1>Todo APP</h1>
      <Todos todos={todos} onRemoveTodo={handleRemove} onToggleCompleteTodo= {handleCompleted} />
    </div>
  )
}

export default App
