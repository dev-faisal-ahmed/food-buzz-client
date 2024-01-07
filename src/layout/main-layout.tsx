import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/shared/navbar/navbar';
import { Footer } from '../components/shared/footer/footer';

export function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
