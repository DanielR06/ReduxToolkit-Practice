import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/task/taskSlice";
import {v4 as uudi} from 'uuid'
import { Link, useNavigate, useParams } from "react-router-dom";
const TaskForm = () => {
  const [ task, setTask ] = useState({
    title: '',
    description: '', 
  });

const dispatch = useDispatch();
const tasks = useSelector(state => state.task);
const navigate = useNavigate();
const params = useParams();

  const handleChange = e => {
      setTask({
        ...task,
        [e.target.name]:e.target.value
      })
  };
  const handleSubmit = e => {
    e.preventDefault();

    if(params.id){
      dispatch(editTask(task))
    } else {
      dispatch(addTask({
        ...task,
        id: uudi() 
      }));
    }
    navigate('/')
  };

useEffect(() => {
  if(params.id){
    const taskFound = tasks.find(task => task.id == params.id);
    setTask(taskFound);
  }
}, [params.id, tasks])

  return (
    <div>
      <Link to='/' className='flex m-2 text-red-600'>Back to</Link>
      <form onSubmit={handleSubmit} className='bg-zinc-900 max-w-sm p-4 '>
        <label htmlFor="title" className='block text-xs font-bold mb-2'>Task:</label>
        <input 
          className='w-full p-2 rounded-md mb-2'
          name="title" 
          type="text" 
          placeholder="title" 
          onChange={handleChange}
          value={task.title}
        />
        <label htmlFor="description" className='block text-xs font-bold mb-2'>Description</label>
        <textarea 
          className='w-full p-2 rounded-md mb-2'
          name="description" 
          placeholder="description" 
          onChange={handleChange} 
          value={task.description}
        />
      <button>Save</button>
    </form>
    </div>
  )
}

export default TaskForm