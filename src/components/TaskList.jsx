import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../features/task/taskSlice";
import { Link } from "react-router-dom";


const TaskList = () => {
    const tasks = useSelector(state => state.task)
    const dispatch = useDispatch();
    
    const handleDelete = (id) => {
       dispatch(deleteTask(id));
    }
    return (
    <div className='w-5/6'>
        <header className='flex justify-between items-center p-4'>
            <h1>Tasks: {tasks.length}</h1>
            <Link to='/create-task' className='bg-blue-700 px-2 py-1 rounded-md text-sm'>Create new task</Link>
        </header>
        <div className='grid grid-cols-3 gap-4'>
        {tasks.map(task =>(
            <div key={task.id} className=' bg-zinc-900 p-4 rounded-md'>
                <header className='flex justify-between'>
                    <h1>{task.title}</h1>
                    <div className='flex gap-x-2'>
                        <button onClick={() => handleDelete(task.id)} 
                        className='bg-red-600 px-2 py-1 text-xs rounded-md'>Delete</button>
                        <Link to={`/edit-task/${task.id}`} 
                        className='bg-green-600  px-2 py-1 text-xs rounded-md'>Edit</Link>
                    </div>
                </header>
                <p>{task.description}</p>
            </div>
        ))}
        </div>

    </div>
  )
}

export default TaskList