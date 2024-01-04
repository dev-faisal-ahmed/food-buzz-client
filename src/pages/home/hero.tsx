import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/container';
import { ImagesData } from '../../data/images-data';

export function Hero() {
  return (
    <Container className='flex gap-20 py-20 text-white'>
      <div className='flex-grow'>
        <h1 className='font-mono text-5xl'>
          Fresh Foods <br /> Home Delivery
        </h1>
        <p className='mt-5 text-gray-300'>
          Your cravings don't wait, and neither should you. Enjoy speedy
          delivery straight to your doorstep, ensuring that your favorite meals
          are just a click away. Track your order in real-time for an effortless
          experience.
        </p>
        <Link to={'/foods'} className='btn-primary mt-10 inline-block'>
          Order Now
        </Link>

        <div className='mt-10 grid grid-cols-[auto_1fr] items-center gap-5'>
          <img
            className='block h-16 w-16 rounded-full object-cover'
            src={ImagesData.heroRealProduct}
            alt='Real Product'
          />
          <div>
            <h1 className='text-lg font-semibold'>Real Product</h1>
            <p className='text-sm text-gray-300'>
              We provide 100% authentic products
            </p>
          </div>

          <img
            className='block h-16 w-16 rounded-full object-cover'
            src={ImagesData.heroGlutenFree}
            alt='Gluten Free Product'
          />
          <div>
            <h1 className='text-lg font-semibold'>Gluten Free</h1>
            <p className='text-sm text-gray-300'>
              We provide 100% gluten free products
            </p>
          </div>
        </div>
      </div>
      <img className='h-fit flex-grow' src={ImagesData.hero} alt='Foods' />
    </Container>
  );
}