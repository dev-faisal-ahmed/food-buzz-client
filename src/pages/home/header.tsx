import { Navbar } from '../../components/shared/navbar/navbar';
import { Hero } from './hero';

export function Header() {
  return (
    <header className='bg-hero'>
      <Navbar className='bg-transparent text-white' />
      <Hero />
    </header>
  );
}
