import { twMerge } from 'tailwind-merge';
import { Rating } from './rating';
import { IoCart } from 'react-icons/io5';

type FoodCardProps = {
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: string;
};

export function FoodCard({
  title,
  category,
  image,
  price,
  rating,
  reviewCount,
}: FoodCardProps) {
  return (
    <div className='overflow-hidden rounded bg-white shadow'>
      <img src={image} alt={title} className='h-40 w-full object-cover' />
      <div className='px-5 py-4'>
        <h4 className='text-lg font-semibold'>{title}</h4>
        <p className='mb-2 text-sm text-gray-500'>{category}</p>
        <Rating rating={rating} reviewCount={reviewCount} />
        <div className='mt-3 flex items-center justify-between'>
          <p className='text-xl text-primary-600'>${price}</p>
          <button
            className={twMerge('btn-primary', 'flex items-center gap-1 pl-3')}
          >
            <span className='text-xl'>
              <IoCart />
            </span>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
