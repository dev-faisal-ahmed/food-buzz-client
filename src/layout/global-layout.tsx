import { Outlet } from 'react-router-dom';

export function GlobalLayout() {
  return (
    <main className='bg-primary-50'>
      <Outlet />
    </main>
  );
}
