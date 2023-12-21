import { useNavigate } from "react-router-dom";

export default function TaskCard ({task}) {

  const navigate = useNavigate()
  
  return (
    <div className="bg-gray-100 hover:bg-gray-300 hover:cursor-pointer" onClick={
      () => navigate(`/tasks/${task.id}/`)}>
      <h1 className="fontbold uppercase">{task.title}</h1>
      <p className="text-slate-500">{task.description}</p>
    </div>
  );
}
