import { twMerge } from 'tailwind-merge';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../../ui/container';
import { Logo } from '../logo';
import { NavLinksData } from '../../../data/nav-links';
import { NavLink } from './nav-link';
import { MobileNavItems } from './mobile-nav-items';

type NavbarProps = {
  className?: string;
};

export function Navbar({ className }: NavbarProps) {
  const location = useLocation();
  return (
    <nav className={twMerge('sticky top-0 bg-white py-3', className)}>
      <Container className='flex items-center justify-between'>
        <Logo />
        <div className='hidden items-center gap-8 md:flex'>
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
        </div>
        <MobileNavItems />
      </Container>
    </nav>
  );
}
