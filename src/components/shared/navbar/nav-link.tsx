import { Link } from 'react-router-dom';

type NavLinkProps = {
  title: string;
  url: string;
  activeUrl: string;
  activeColor: string;
};

export function NavLink({ title, url, activeUrl, activeColor }: NavLinkProps) {
  return (
    <Link className='font-semibold' to={url}>
      {title}

      <span
        style={{
          backgroundColor: activeUrl === url ? activeColor : 'transparent',
        }}
        className='absolute mt-1 block h-[2px] w-6 rounded-full'
      />
    </Link>
  );
}
