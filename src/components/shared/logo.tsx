import { MdFastfood } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link to={'/'} className={twMerge('flex items-center gap-3', className)}>
      <MdFastfood className='text-3xl' />
      <h1 className='font-mono text-3xl font-bold'>
        <span>Food</span>
        <span>Buzz</span>
      </h1>
    </Link>
  );
}
