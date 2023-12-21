import { getAllTasks } from "../api/tasks.api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import TaskCard from "./TaskCard";

export default function TasksList() {
  
  const [ tasks, setTasks ] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      console.log(res)
      setTasks(res.data)
    }
    loadTasks();
  }, []);

  return (
  <div className="grid grid-cols-3 gap-3">
      {
        tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))
      }
  </div>
  );
}
