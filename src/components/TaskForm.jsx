import { useState } from "react"

export default function TaskForm({onAdd}) {

   const [taskName, setTaskName] = useState('')

   function handleSubmit(e){
      e.preventDefault()
      onAdd(taskName)
      setTaskName('')
   }

   return (
      <form
         onSubmit={handleSubmit}
         className="mt-10 border-[3px] border-gray-600 rounded-lg p-1 flex"
      >
         <button
            className="bg-indigo-500 text-white px-4 py-2 border-none rounded"
            type=""
         >+</button>
         <input
            type="text"
            className="w-full block border-gray-600 border-none rounded p-2"
            placeholder='Nueva tarea....'
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
         />
      </form>
   )
}
