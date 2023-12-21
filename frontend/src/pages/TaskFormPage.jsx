import { useForm } from "react-hook-form";
import { createTask, deleteTask, getTask, updateTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function TaskFormPage() {

  const { register, handleSubmit, 
    formState: { errors },
    setValue
  } = useForm();
  
  useEffect(() => {
    async function loadTask() {
      if(params.id) {
        const { data: { title, description } } = await getTask(params.id)
        setValue("title", title)
        setValue("description", description)
      }
    }
    loadTask()
  }, []);

  const onSubmit = handleSubmit(async data => {
    if(params.id) {
      // if ther's params id, then update task is called.
      await updateTask(params.id, data);
      toast.success("Successfully updated task.", {
        position: "bottom-left",
        style: {
          background: "darkslateblue",
          color: "white"
        }
      });
    } else {
      await createTask(data);
      toast.success("Successfully created task.", {
        position: "bottom-left",
        style: {
          background: "darkslateblue",
          color: "white"
        }
      });
    }
    navigate("/tasks")
  });
  
  const navigate = useNavigate();
  const params = useParams()

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          className="bg-gray-100 p-3 rounded-lg block w-full mb-3"
          type="text" 
          placeholder="title" 
          {...register("title", { required: true } ) } />
        {errors.title && <span>Title is required </span>}
        <textarea 
          className="bg-gray-100 p-3 rounded-lg block w-full mb-3"
          rows="3" 
          placeholder="Description" 
          {...register("description", { required: true })}></textarea>
        {errors.description && <span>Title is required </span>}
        <button 
          className="bg-indigo-500 p-3 rounded-lg block w-full mt-3 text-white"
        >Save</button> 
      </form>
      { params.id && 
        <div className="flex jusify-end">
        <button 
        className="bg-red-500 p-3 rounded-lg block w-48 mt-3"
        onClick={async () => {
        if(window.confirm("Do you want to delete selected task?")) {
          await deleteTask(params.id);
          toast.success("Successfully deleted task.", {
            position: "bottom-left",
            style: {
              background: "darkslateblue",
              color: "white"
            }
          });
          navigate("/tasks")
        }
      }}>Delete</button></div>}
      
    </div>);
}
