import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/shared/navbar/navbar';

export function LandingPageLayout() {
  return (
    <>
      <Navbar className='bg-hero text-white shadow' />
      <Outlet />
    </>
  );
}
