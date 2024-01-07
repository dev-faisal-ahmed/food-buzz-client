import { twMerge } from 'tailwind-merge';
import { Container } from '../../components/ui/container';

export function NewsLetter() {
  return (
    <section className='mt-16 bg-hero/60'>
      <Container className='py-16 text-center'>
        <h1 className='text-3xl font-semibold text-white'>Subscribe Now</h1>
        <p className='mt-1 text-gray-200'>
          To get our latest update and get all offers
        </p>
        <div className='mx-auto mt-8 flex w-full max-w-[450px] rounded bg-white p-2'>
          <input
            className='w-full bg-transparent px-2 outline-none'
            type='text'
            placeholder='Enter Email'
          />
          <button className={twMerge('btn-primary')}>Subscribe</button>
        </div>
      </Container>
    </section>
  );
}
