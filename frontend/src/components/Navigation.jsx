import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='flex justify-between py-3'>
      <Link to="tasks">
        <h1 className='fontbold text-3xl mb-4'>Tasks App</h1>
      </Link>
      <button className='bg-indigo-500 px-3 py-2 rounded-lg text-gray-100'>
        <Link to="/tasks-create">Create task</Link>
      </button>
    </div>
  );
}
