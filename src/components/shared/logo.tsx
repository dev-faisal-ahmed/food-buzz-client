import { MdFastfood } from 'react-icons/md';
import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to={'/'} className='flex items-center gap-3'>
      <MdFastfood className='text-3xl' />
      <h1 className='font-mono text-3xl font-bold'>
        <span>Food</span>
        <span>Buzz</span>
      </h1>
    </Link>
  );
}
