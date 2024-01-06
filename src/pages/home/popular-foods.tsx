import { Link } from 'react-router-dom';
import { Container } from '../../components/ui/container';
import { Foods } from '../../data/food-data';
import { FoodCard } from '../../components/shared/food-card/food-card';

export function PopularFoods() {
  return (
    <Container className='mt-16'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-semibold'>Popular Foods</h1>
        <Link to={'/foods'} className='font-semibold text-blue-600'>
          See All
        </Link>
      </div>
      <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Foods.map((food, index) => (
          <FoodCard key={index} {...food} />
        ))}
      </div>
    </Container>
  );
}
