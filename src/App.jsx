import { useEffect, useState } from "react"
import Header from "./components/Header"
import Task from "./components/Task"
import TaskForm from "./components/TaskForm"

function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if (tasks.length === 0) return
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    setTasks(tasks)
  }, [])

  function addTask(name) {
    setTasks(prev => {
      return [...prev, { name: name, completed: false }]
    })

  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev]
      newTasks[taskIndex].completed = newDone
      return newTasks
    })
  }

  function getMessage() {
    const percentage = numberComplete / numberTotal * 100
    if (percentage === 100) {
      return 'Felicidades, has completado todas tus tareas 🥳'
    }
    if (percentage === 0) {
      return 'Completa todas tus tareas 🫤'
    }else{
      return 'Sigue así, vas por buen camino 🚀'
    }

  }

  const numberComplete = tasks.filter(task => task.completed).length
  const numberTotal = tasks.length

  function onDelete(index){
    setTasks(prev => {
      return prev.filter((_, i) => i !== index)
    })
  }

  function onEdit(index, newName){
    setTasks(prev => {
      const newTasks = [...prev]
      newTasks[index].name = newName
      return newTasks
    })
  } 


  return (
    <div className="my-20 max-w-2xl mx-auto shadow-sm bg-white p-10">
      <Header />

      <h1 className="text-center font-bold mt-10 text-3xl tracking-wide">{numberComplete}/{numberTotal} Completado</h1>
      <h4 className="text-center text-blue-800 font-semibold mt-5 text-xl ">{getMessage()}</h4>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task key={task.id} {...task}
          onEdit={newName => onEdit(index, newName)}
          onDelete={() => onDelete(index)}
          onToggle={done => updateTaskDone(index, done)}
        />
      ))}
    </div>
  )
}

export default App
