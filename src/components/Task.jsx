import { useState } from "react"
import Checkbox from "./Checkbox"

function Task({ name, completed, onToggle, onDelete, onEdit }) {

   const [edit, setEdit] = useState(false)

   return (
      <div className="bg-gray-300 items-center text-gray-900 flex rounded-lg mt-2 p-2">
         <Checkbox checked={completed} onClick={() => onToggle(!completed)} />
         {!edit && (
            <div className="flex-grow" onClick={() => setEdit(prev => !prev)}><span className="text-2xl">{name}</span></div>
         )}
         {edit && (
            <form onSubmit={e => e.preventDefault()} className="w-full">
               <input
                  type="text"
                  className="w-full block text-xl border-gray-600 border-none rounded p-2 bg-gray-400 "
                  value={name}
                  onChange={(e) => onEdit(e.target.value)}
               />
            </form>
         )}
         <button onClick={onDelete}>
            <svg className="h-6 mr-2 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" /></svg>
         </button>
      </div>
   )
}

export default Task