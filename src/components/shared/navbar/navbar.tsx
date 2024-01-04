import { twMerge } from 'tailwind-merge';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../../ui/container';
import { Logo } from '../logo';
import { NavLinksData } from '../../../data/nav-links';
import { NavLink } from './nav-link';

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const location = useLocation();
  return (
    <nav className={twMerge('bg-white py-3', className)}>
      <Container className='flex items-center gap-8'>
        <Logo />
        <div className='ml-auto' />
        {NavLinksData.map(({ title, url }) => (
          <NavLink
            key={url}
            title={title}
            url={url}
            activeUrl={location.pathname}
            activeColor='white'
          />
        ))}
        <Link to='/login' className='btn-primary'>
          Login
        </Link>
      </Container>
    </nav>
  );
}
