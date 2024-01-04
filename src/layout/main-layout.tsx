import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/shared/navbar/navbar';

export function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
