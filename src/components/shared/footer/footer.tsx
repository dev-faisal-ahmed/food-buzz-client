import { Link } from 'react-router-dom';
import { SocialLinks } from '../../../data/shared/social-links-data';
import { Container } from '../../ui/container';
import { Logo } from '../logo';
import {
  FooterLinks,
  HelpCenter,
  SupportLinks,
} from '../../../data/links/links';

export function Footer() {
  return (
    <footer className='bg-footer mt-16 py-16 text-white'>
      <Container className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
        {/* company info */}
        <div className='mx-auto w-fit text-center md:mx-0 md:text-justify'>
          <Logo className='mx-auto w-fit md:mx-0' />
          <p className='mt-3 text-gray-300'>
            Location: Mirpur, Dhaka-1216 <br />
            Email:{' '}
            <a href='mailto:ost.faisal.ahmed@gmail.com'>
              ost.faisal.ahmed@gmail.com
            </a>
          </p>
          <div className='mx-auto mt-4 flex w-fit items-center gap-3 md:mx-0'>
            {SocialLinks.map(({ url, icon }) => (
              <Link
                className='rounded bg-gray-800 p-2 text-white transition hover:scale-110'
                to={url}
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
        {/* links */}
        <div className='mx-auto w-fit space-y-1 text-center md:mx-0 md:text-justify'>
          <h1 className='mb-3 text-xl'>Company</h1>
          {FooterLinks.map(({ title, url }) => (
            <Link
              className='block transition hover:underline'
              key={title}
              to={url}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className='mx-auto w-fit space-y-1 text-center md:mx-0 md:text-justify'>
          <h1 className='mb-3 text-xl'>Support</h1>
          {SupportLinks.map(({ title, url }) => (
            <Link
              className='block transition hover:underline'
              key={title}
              to={url}
            >
              {title}
            </Link>
          ))}
        </div>
        <div className='mx-auto w-fit space-y-1 text-center md:mx-0 md:text-justify'>
          <h1 className='mb-3 text-xl'>Help Center</h1>
          {HelpCenter.map(({ title, url }) => (
            <Link
              className='block transition hover:underline'
              key={title}
              to={url}
            >
              {title}
            </Link>
          ))}
        </div>
      </Container>
    </footer>
  );
}
